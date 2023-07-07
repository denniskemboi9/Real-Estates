import React from 'react';
import { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';


export default function Home() {
  
  const [approvedProperties, setApprovedProperties] = useState([]);
  useEffect(() => {
    // Fetch the list of approved properties
    fetch("/approvedproperties", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the approvedProperties state with the fetched properties
        setApprovedProperties(data);
      })
      .catch((error) => {
        // Handle the error or show an error message
        console.error("Error fetching approved properties:", error);
      });
  }, []);

  return (
    <div>
      {/* <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {properties.map((property) => (
          <div
            key={property.id}
            style={{
              width: 'calc(25% - 10px)', // Adjusted width for 4 properties per row
              marginBottom: '20px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <h2>{property.name}</h2>
            <img
              src={property.image}
              alt={property.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
            <p>{property.description}</p>
            <p>Price: {property.price}</p>
            <button onClick={() => handleBuyProperty(property.id)}>
              Buy
            </button>
          </div>
        ))}
      </div> */}

            {/* Render the list of approved properties */}
            {approvedProperties.map((property) => (
     
                        // <div
                        //   key={property.id}

                        // >
                        //   <h2>{property.name}</h2>

                        //   <p>{property.description}</p>
                        
                        // </div>
        <PropertyCard key={property.id} property={property} approveProperty={approvedProperties} setApproveProperty={setApprovedProperties}/>


      ))}
   




    </div>
  );
}