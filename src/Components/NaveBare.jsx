import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NaveBare() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NaveBare;
