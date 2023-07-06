import React from 'react';


export default function Home() {
  const properties = [
    {
      id: 1,
      name: 'Modern Apartment',
      description: 'Stylish apartment in the heart of the city.',
      price: 200000,
      image_url: '',
    },
    {
      id: 2,
      name: 'Luxury Villa',
      description: 'Exquisite villa with stunning ocean views.',
      price: 1000000,
      image_url: '',
    },
    {
      id: 3,
     name: 'Cozy Cottage',
      description: 'Charming cottage surrounded by nature.',
      price: 150000,
      image_url: '',
    },
    {
      id: 4,
    name: 'Spacious Townhouse',
      description: 'Modern townhouse with ample living space.',
      price: 300000,
      image_url: '',
    },
    {
      id: 5,
      name: 'Elegant Mansion',
      description: 'Grand mansion with luxurious amenities.',
      price: 5000000,
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0T4A0Y3FX_l5Tux8S193sHoMqqRnClM11w&usqp=CAU',
    },
    {
      id: 6,
      name: 'Rustic Farmhouse',
      description: 'Quaint farmhouse surrounded by farmland.',
      price: 250000,
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvkLYaJXrx2wcHD3U2eVP2J3dVx92fcjB8Q&usqp=CAU',
    },
    {
      id: 7,
      name: 'Beachfront Bungalow',
      description: 'Charming bungalow just steps from the beach.',
      price: 400000,
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXW_wEqF6lk7zqvbSz-LgTiRayoIpvLNQAVw&usqp=CAU',
    },
    {
      id: 8,
      name: 'Mountain Retreat',
      description: 'Tranquil retreat nestled in the mountains.',
      price: 350000,
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dgz0h2OzVTMuK5WnLecN4Ddglc085Ltzig&usqp=CAU',
    },
    {
      id: 9,
      name: 'Urban Loft',
      description: 'Contemporary loft in a vibrant city neighborhood.',
      price: 280000,
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4OaSzXHQhPVUH9OvmeKyUH-6YfSbKpd2Bg&usqp=CAU',
    },
    {
      id: 10,
      name: 'Lakefront Cabin',
      description: 'Cozy cabin overlooking a serene lake.',
      price: 180000,
      image_url: 'https://example.com/images/lakefront-cabin.jpg',
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
      </div>
    </div>
  );
}