import React from "react";
import "./IceCreamOfTheDay.css";
import { Card, Container } from "react-bootstrap";

const IceCreamOfTheDay = () => {
  const iceCream = {
    name: "Chocolate Fudge Delight",
    description:
      "A rich and creamy chocolate ice cream topped with fudge and nuts.",
    price: "$4.99",
    image: "https://wallpaperaccess.com/full/1279331.jpg",
  };

  return (
    <Container className="my-5">
      <h2 className="text-center">Ice Cream of the Day</h2>
      <Card className="text-center p-3">
        <Card.Img variant="top" src={iceCream.image} alt={iceCream.name} />
        <Card.Body>
          <Card.Title>{iceCream.name}</Card.Title>
          <Card.Text>{iceCream.description}</Card.Text>
          <h4>{iceCream.price}</h4>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default IceCreamOfTheDay;
