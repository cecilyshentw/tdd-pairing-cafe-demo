import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
        <Container>
            <Navbar.Brand href="#">TW CAFE</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  );
};

export default Header;
