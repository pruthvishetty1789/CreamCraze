import React from "react";
import "./PopularDishes.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const dishes = [
  {
    id: 1,
    name: "Espresso",
    image: "https://wallpapercave.com/wp/wp8868150.jpg",
    price: "$3",
  },
  {
    id: 2,
    name: "Cappuccino",
    image: "https://images.alphacoders.com/153/thumb-1920-153783.jpg",
    price: "$4",
  },
  {
    id: 3,
    name: "Croissant",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.Z2rbbXU5A4uQHYJCzBRfoQHaF_&pid=Api",
    price: "$2",
  },
];

const PopularDishes = () => {
  return (
    <Container className="my-5 popular-dishes-container">
      <h2 className="text-center">Popular Dishes</h2>
      <Row>
        {dishes.map((dish) => (
          <Col key={dish.id} md={4} className="mb-4 d-flex">
            <Card className="popular-card w-100">
              <Card.Img variant="top" src={dish.image} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularDishes;
