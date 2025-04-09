import React from "react";
import "./Testimonials.css";

import { Container, Row, Col, Card } from "react-bootstrap";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Amazing coffee and great atmosphere!",
    image:
      "https://www.goodfreephotos.com/albums/people/young-man-in-a-corporate-suit-face-portrait.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Best café in town. Highly recommend!",
    image: "https://anhede.se/wp-content/uploads/2014/01/130221-2528.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    text: "Love the pastries and friendly staff!",
    image:
      "https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg",
  },
];

const Testimonials = () => {
  return (
    <Container className="my-5 testimonials-container">
      <h2 className="text-center">What Our Customers Say</h2>
      <Row>
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} md={4} className="mb-4 d-flex">
            <Card className="testimonial-card w-100">
              <Card.Img variant="top" src={testimonial.image} />
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>"{testimonial.text}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
