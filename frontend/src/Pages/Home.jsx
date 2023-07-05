import React, { useEffect, useState } from 'react';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties data from your database
    // and update the "properties" state
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      // Make an API call to fetch properties data
      const response = await fetch('/api/properties');
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.log('Error fetching properties:', error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {properties.map((property) => (
          <div key={property.id}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Price: {property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
