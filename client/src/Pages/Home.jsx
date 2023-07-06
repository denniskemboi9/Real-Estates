// export default function Home() {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     fetch('/properties')
//       .then((response) => response.json())
//       .then((data) => {
//         setProperties(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching properties:', error);
//       });
//   }, []);

//   const handleBuyProperty = (propertyId) => {
//     // Find the property with the matching id
//     const propertyToBuy = properties.find((property) => property.id === propertyId);

//     if (propertyToBuy) {
//       // Perform the buy property logic here
//       console.log(`Buying property with ID: ${propertyToBuy.id}`);

//       // You can perform additional actions here, such as updating the database or showing a success message
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'space-between',
//         }}
//       >
//         {properties.map((property) => (
//           <div
//             key={property.id}
//             style={{
//               width: 'calc(25% - 10px)', // Adjusted width for 4 properties per row
//               marginBottom: '20px',
//               padding: '10px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease',
//               cursor: 'pointer',
//               ':hover': {
//                 transform: 'scale(1.05)',
//               },
//             }}
//           >
//             <h2>{property.title}</h2>
//             <img
//               src={property.image}
//               alt={property.title}
//               style={{
//                 width: '100%',
//                 height: '200px',
//                 objectFit: 'cover',
//                 borderRadius: '5px',
//               }}
//             />
//             <p>{property.description}</p>
//             <p>Price: {property.price}</p>
//             <button onClick={() => handleBuyProperty(property.id)}>
//               Buy
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/properties')
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  const handleBuyProperty = (propertyId) => {
    // Find the property with the matching id
    const propertyToBuy = properties.find((property) => property.id === propertyId);

    if (propertyToBuy) {
      // Perform the buy property logic here
      console.log(`Buying property with ID: ${propertyToBuy.id}`);

      // You can perform additional actions here, such as updating the database or showing a success message
    }
  };

  const handleDeleteProperty = (propertyId) => {
    // Confirm deletion
    if (window.confirm('Are you sure you want to delete this property?')) {
      // Perform the delete property logic here
      console.log(`Deleting property with ID: ${propertyId}`);

      // Update the properties state by removing the deleted property
      setProperties((prevProperties) =>
        prevProperties.filter((property) => property.id !== propertyId)
      );

      // You can perform additional actions here, such as updating the database or showing a success message
    }
  };

  return (
    <div>
      <div
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
            <h2>{property.title}</h2>
            <img
              src={property.image}
              alt={property.title}
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
            <button onClick={() => handleDeleteProperty(property.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
