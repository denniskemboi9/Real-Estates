import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export const PropertyContext = createContext();

export default function PropertyProvider({children}) 
{
    const navigate = useNavigate()
    const [property, setProperty] = useState()
    const [change, setChange] = useState(false)


        // Fetch Properties
        useEffect(()=>{
          fetch("/properties", {
              method: "GET",
              headers:{"Content-Type": "application/json"}
          }
          )
          .then(res=>res.json())
          .then(response=>{setProperty(response)
          }
          )
      }, [change])


    // Add a new Property
    const addProperty = (name, location, description, image_url) =>{
        fetch("/properties",{
            method: "POST",
            headers:{"Content-Type": "application/json"},    
            body: JSON.stringify({name:name, location:location, description:description, image_url:image_url})
        }
        )
        .then(res=>res.json())
        .then(response=>{
            console.log(response)

            if(response.error)
            {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: response.error,
                })
            }
            else if(response.success)
            {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: response.success,
                showConfirmButton: false,
                timer: 1500
              })
              setChange(!change)
              navigate("/")
                
            }

            else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Something went wrong!",
              })
            }
            
        })
    }

  

    // Delete Poem  
    const deleteProperty = (id) =>{
      fetch(`/delete/${id}`,{
          method: "DELETE"
      })
      .then(res=>res.json())
      .then((response)=>{
        setChange(!change)
        console.log(response)
        navigate("/")
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Poem Deleted successfully!',
              timer: 1500
          })

      })
    }
  

    const contextData = {
      properties,
      addProperty,
      deleteProperty 
    }

  return (
     <PoemContext.Provider value={contextData}>
        {children}
     </PoemContext.Provider>

  )
}

