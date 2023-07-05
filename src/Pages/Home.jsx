// import React, { useEffect, useState } from 'react';

// export default function Home() {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const fetchProperties = async () => {
//     try {
//       // Make an API call to fetch the properties from the database
//       const response = await fetch('https://example.com/api/properties');
//       const data = await response.json();

//       // Set the fetched properties in the state
//       setProperties(data);
//     } catch (error) {
//       console.error('Error fetching properties:', error);
//     }
//   };

//   const handleBuyProperty = (propertyId) => {
//     // Perform the buy property logic here
//     console.log(`Buying property with ID: ${propertyId}`);
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

import React from 'react';

export default function Home() {
  const properties = [
    {
      id: 1,
      title: 'Modern Apartment',
      description: 'Stylish apartment in the heart of the city.',
      price: 200000,
      image: '',
    },
    {
      id: 2,
      title: 'Luxury Villa',
      description: 'Exquisite villa with stunning ocean views.',
      price: 1000000,
      image: '',
    },
    {
      id: 3,
      title: 'Cozy Cottage',
      description: 'Charming cottage surrounded by nature.',
      price: 150000,
      image: '',
    },
    {
      id: 4,
      title: 'Spacious Townhouse',
      description: 'Modern townhouse with ample living space.',
      price: 300000,
      image: '',
    },
    {
      id: 5,
      title: 'Elegant Mansion',
      description: 'Grand mansion with luxurious amenities.',
      price: 5000000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0T4A0Y3FX_l5Tux8S193sHoMqqRnClM11w&usqp=CAU',
    },
    {
      id: 6,
      title: 'Rustic Farmhouse',
      description: 'Quaint farmhouse surrounded by farmland.',
      price: 250000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvkLYaJXrx2wcHD3U2eVP2J3dVx92fcjB8Q&usqp=CAU',
    },
    {
      id: 7,
      title: 'Beachfront Bungalow',
      description: 'Charming bungalow just steps from the beach.',
      price: 400000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXW_wEqF6lk7zqvbSz-LgTiRayoIpvLNQAVw&usqp=CAU',
    },
    {
      id: 8,
      title: 'Mountain Retreat',
      description: 'Tranquil retreat nestled in the mountains.',
      price: 350000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dgz0h2OzVTMuK5WnLecN4Ddglc085Ltzig&usqp=CAU',
    },
    {
      id: 9,
      title: 'Urban Loft',
      description: 'Contemporary loft in a vibrant city neighborhood.',
      price: 280000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4OaSzXHQhPVUH9OvmeKyUH-6YfSbKpd2Bg&usqp=CAU',
    },
    {
      id: 10,
      title: 'Lakefront Cabin',
      description: 'Cozy cabin overlooking a serene lake.',
      price: 180000,
      image: 'https://example.com/images/lakefront-cabin.jpg',
    },
  ];

  const handleBuyProperty = (propertyId) => {
    // Perform the buy property logic here
    console.log(`Buying property with ID: ${propertyId}`);
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
          </div>
        ))}
      </div>
    </div>
  );
}
