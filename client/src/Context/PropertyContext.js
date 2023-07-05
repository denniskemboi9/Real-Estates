import React, { createContext, useState } from 'react';

export const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

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
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log('Created property:', data);
        // Perform any additional actions with the created property data
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error creating property:', error);
      });
  };

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
