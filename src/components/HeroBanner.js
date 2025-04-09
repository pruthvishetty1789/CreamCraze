import React from "react";
import { Container, Button } from "react-bootstrap";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <Container className="text-center text-white py-5">
        <h1>Welcome to Ideal Café</h1>
        <p>Delicious coffee & treats, made with love.</p>
        <Button variant="primary" size="lg" href="/menu">
          Explore Menu
        </Button>
      </Container>
    </div>
  );
};

export default HeroBanner;
