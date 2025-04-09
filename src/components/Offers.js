import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Offers.css";

const offers = [
  {
    id: 1,
    title: "Buy One Get One Free",
    description: "Enjoy a free coffee with every coffee purchase.",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/assorted-ice-cream-deals-design-template-05e05489a6a7ae41a61cd905e31dbcf3_screen.jpg?ts=1634476532",
  },
  {
    id: 2,
    title: "20% Off Pastries",
    description: "Get 20% off on all pastries every Monday.",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ice-cream-ad%2Cice-cream-discount-offer-design-template-60e9fd7ed27f965eab62f04ff2670d82_screen.jpg?ts=1685984507",
  },
  {
    id: 3,
    title: "Happy Hours",
    description: "50% off on all drinks from 4-6 PM.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd/20020f98464399.5edd0035854cc.jpg",
  },
];

const Offers = () => {
  return (
    <Container className="my-5 special-offers-container">
      <h2 className="text-center">Special Offers</h2>
      <Row>
        {offers.map((offer) => (
          <Col key={offer.id} md={4} className="mb-4 d-flex">
            <Card className="offer-card w-100">
              <Card.Img variant="top" src={offer.image} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
