import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const reviews = [
  {
    name: "Alice Johnson",
    review: "Amazing food and great service! Highly recommend this place.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Mark Smith",
    review: "Loved the ambiance and the dishes were fantastic!",
    rating: "⭐⭐⭐⭐",
  },
  {
    name: "Sophia Brown",
    review: "A delightful experience with delicious desserts!",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const Reviews = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center">Customer Reviews</h2>
      <Row>
        {reviews.map((review, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="p-3">
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{review.review}</Card.Text>
                <h5>{review.rating}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
