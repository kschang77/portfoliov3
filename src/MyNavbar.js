import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'


function MyNavbar() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" id="ksc-navbar" fixed="top">
      <Navbar.Brand href="#home-section">KC</Navbar.Brand>
      <Navbar.Toggle aria-controls="ksc-nav">
        Menu <i class="fas fa-bars"></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="ksc-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home-section">Home</Nav.Link>
          <Nav.Link href="#fullstack-section">Fullstack</Nav.Link>
          <Nav.Link href="#it-support-section">IT_Support</Nav.Link>
          <Nav.Link href="#data-section">Data/base</Nav.Link>
          <Nav.Link href="#other-section">Other</Nav.Link>
          <Nav.Link href="#contact-section">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar;