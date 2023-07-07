import React, { useContext, useEffect } from "react";
import { PropertyContext } from "../Context/PropertyContext";
const ApproveProperty = () => {
  const { properties,  approveProperty } = useContext(
    PropertyContext
  );

  // useEffect(() => {
  //   fetchProperties();
  // }, []);

  const handleApprove = (propertyId) => {
    approveProperty(propertyId);
  };

  return (
    <div>
      <h2>Approve Property</h2>
      {properties && properties.map((property) => (
        <div key={property.id}>
          <h3>{property.name}</h3>
          <p>Location: {property.location}</p>
          <p>Description: {property.description}</p>
          <button onClick={() => handleApprove(property.id)}>
            Approve
          </button>
        </div>
      ))}
    </div>
  );
};

export default ApproveProperty;
