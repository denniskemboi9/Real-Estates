import React, { createContext, useState } from 'react';
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";


export const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {

  const navigate = useNavigate()

  const [properties, setProperties] = useState([]);

  const [change, setChange] = useState(false)


  const fetchProperties = () => {
    fetch('/properties')
      .then((response) => response.json())
      .then((data) => {
        // Update the properties state with the fetched properties
        setProperties(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error fetching properties:', error);
      });
  };

  const createProperty = (propertyData) => {
    fetch('/properties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(propertyData),
    })
    .then(res=>res.json())
        .then(response=>{
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
                    title: 'Created property!',
                    timer: 1500
                  })
                navigate("/Home")
                setChange(!change)

            }
            else{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '',
                    text: "Created property!!",
                    timer: 3000
                })

            }
            
        })
    }
  const deleteProperty = (id) => {
    fetch(`/properties/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log('Deleted property:', data);
        // Perform any additional actions after deleting the property
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error deleting property:', error);
      });
  };

  const contextData = {
    properties,
    fetchProperties,
    createProperty,
    deleteProperty,
  };

  return (
    <PropertyContext.Provider value={contextData}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;

// import React, { createContext, useState } from 'react';

// export const PropertyContext = createContext();

// const PropertyProvider = ({ children }) => {
//   const [properties, setProperties] = useState([]);

//   const fetchProperties = () => {
//     fetch('/properties')
//       .then((response) => response.json())
//       .then((data) => {
//         setProperties(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching properties:', error);
//       });
//   };

//   const createProperty = (propertyData) => {
//     fetch('/properties', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(propertyData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to create property');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('Created property:', data);
//         // Perform any additional actions with the created property data
//       })
//       .catch((error) => {
//         console.error('Error creating property:', error);
//       });
//   };

//   const deleteProperty = (id) => {
//     fetch(`/properties/${id}`, {
//       method: 'DELETE',
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Deleted property:', data);
//         // Perform any additional actions after deleting the property
//       })
//       .catch((error) => {
//         console.error('Error deleting property:', error);
//       });
//   };

//   const contextData = {
//     properties,
//     fetchProperties,
//     createProperty,
//     deleteProperty,
//   };

//   return (
//     <PropertyContext.Provider value={contextData}>
//       {children}
//     </PropertyContext.Provider>
//   );
// };

// export default PropertyProvider;
