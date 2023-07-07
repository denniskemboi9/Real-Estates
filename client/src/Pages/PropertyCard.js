// import React, {useContext} from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { PropertyContext } from "../Context/PropertyContext";


const PropertyCard = ({ property }) => {

    // const {currentUser} = useContext(AuthContext)
    // const {deleteProperty} = useContext(PropertyContext)
  return (
    <div>

        <div className="container mx-auto m-auto">
            <h4>{property.name}</h4>
            <p>{property.location}</p>
            <div className="row gx-5">
            <div className="col-lg-8 bg-light">
                <p className="mt-3">{property.description}</p>
            </div>

            <div className="d-flex mt-4 gap-5">
                <p>Date created: {property && property.created_at}</p>
            </div>

            <div>
                {/* {currentUser && currentUser.email === property.user.email ? (
                <> */}
                    <button className="btn btn-primary btn-sm m-1">Edit</button>
                    <button
                    // onClick={() => deleteProperty(property.id)}
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
};

export default PropertyCard;
