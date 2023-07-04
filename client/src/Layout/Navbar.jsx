import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Real Estate</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="mx-auto" style={{ maxHeight: '100px' }} navbarScroll>
        <Nav.Link as={Link} to="/Home" style={{ color: 'black' }}>Home</Nav.Link>
        <Nav.Link as={Link} to="/ApproveProperty" style={{ color: 'black' }}>Approve Property</Nav.Link>
        <Nav.Link as={Link} to="/AddProperty" style={{ color: 'black' }}>Add Property</Nav.Link>
        <NavDropdown title="UserProfile" id="navbarScrollingDropdown">
          {/* <NavDropdown.Item as={Link} to="/Login">Log in</NavDropdown.Item> */}
            <NavDropdown.Item as={Link} to="/CreateProfile">Create profile</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ViewProfile">View profile</NavDropdown.Item>
          </NavDropdown>
        </Nav>

          <NavDropdown title="have an account?" id="navbarScrollingDropdown">
          {/* <NavDropdown.Item as={Link} to="/Login">Log in</NavDropdown.Item> */}
            <NavDropdown.Item as={Link} to="/Register">Register</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
