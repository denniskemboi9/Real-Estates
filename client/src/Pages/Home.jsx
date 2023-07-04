import React, { useState, useEffect } from 'react';

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch property data from the backend API
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      // Make a GET request to fetch property data
      const response = await fetch('/api/properties'); // Replace '/api/properties' with the actual endpoint of your backend API
      const data = await response.json();

      // Update the properties state with the fetched data
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  return (
    <div className="container">
      <h1>Properties</h1>
      {properties.length > 0 ? (
        <ul>
          {properties.map((property) => (
            <li key={property.id}>
              <h2>{property.title}</h2>
              <p>{property.description}</p>
              <p>Price: {property.price}</p>
              <p>Location: {property.location}</p>
              <img src={property.imageUrl} alt={property.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No properties found.</p>
      )}
    </div>
  );
}

export default Home;
