import React from 'react';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div className="wrapper" style={{ minHeight: '10vh', display: 'flex', flexDirection: 'column' }}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Real Estate</Card.Title>
          <Card.Text>
            Real estate is a valuable asset class that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties, and plays a significant role in the economy.
          </Card.Text>
        </Card.Body>
      </Card>
      <footer className="footer mt-auto py-0 bg-primary text-center text-white">Copyright © 2023 Real Estate.</footer>
    </div>
  );
}

export default Footer;
