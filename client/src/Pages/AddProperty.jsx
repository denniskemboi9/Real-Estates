import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddProperty() {
  const [property, setProperty] = useState({
    title: '',
    description: '',
    imageUrl: '',
    location: '',
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform the logic to submit the property data to your backend or perform any other actions
    console.log(property);
    // Reset the form
    setProperty({
      title: '',
      description: '',
      imageUrl: '',
      location: '',
    });
  };

  return (
    <div className="container">
      <h1>Add Property</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={property.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={property.location}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={property.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="imageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={property.imageUrl}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Property
        </Button>
      </Form>
    </div>
  );
}

export default AddProperty;
