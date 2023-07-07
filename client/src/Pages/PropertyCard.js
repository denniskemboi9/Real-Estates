import React, {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { PropertyContext } from "../Context/PropertyContext";


const PropertyCard = ({ property }) => {
    const { deleteProperty } = useContext(PropertyContext);
    const {currentUser} = useContext(AuthContext)
    function handleDelete(){
        fetch(`/properties/approve/${property.id}`,{
            method: "DELETE"
            
        })
        .then(res=>res.json())
        .then((response)=>{
            // Swal.fire({
            //     position: 'center',
            //     icon: 'success',
            //     title: 'Logged out successfully!',
            //     timer: 300
            // })
            console.log(response, "successful")
            deleteProperty(property.id);
             // Remove the card from the UI
        const cardElement = document.getElementById(`property-card-${property.id}`);
        if (cardElement) {
          cardElement.remove();
        }
        })
        .catch (error => console.log(error))
    }
      return (
        <div id={`property-card-${property.id}`}>

        <div className="container mx-auto m-auto">
            <h4>{property.name}</h4>
            <p>{property.location}</p>
            <div className="row gx-5">
            <div className="col-lg-8 bg-light">
                <p className="mt-3">{property.description}</p>
                <img className="mt-3" src={property.image_url}/>
            </div>

            <div className="d-flex mt-4 gap-5">
                <p>Date created: {property && property.created_at}</p>
            </div>

            <div>
                {/* {currentUser && currentUser.email === property.user.email ? (
                <> */}
                    <button className="btn btn-primary btn-sm m-1">Edit</button>
                    <button
                     onClick={handleDelete}
                    className="btn btn-danger btn-sm m-1"
                    >
                    Delete
                    </button>
                {/* </>
                ) : (
                ""
                )} */}
            </div>
            </div>
        </div>
    </div>
  );
}

export default PropertyCard;
