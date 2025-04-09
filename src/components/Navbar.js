import React, { useState, useEffect } from "react";
import "./NavigationBar.css";

import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavigationBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      expand="lg"
      variant={darkMode ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          🍨 CreamCraze
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/offers">
              Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/location">
              Locations
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart style={{ marginRight: "5px" }} />
              Cart
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-success">Search</Button>
            <Button
              variant={darkMode ? "light" : "dark"}
              className="ms-3"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
