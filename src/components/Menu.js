import React, { useContext, useState } from "react";

import { Container, Row, Col, Card, Button, Toast } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

import "./Menu.css";

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    price: "$3.50",
    image: "http://cdn.wallpapersafari.com/63/99/JnAPqz.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "$4.50",
    image:
      "https://cdn.magzter.com/1377116771/1681395992/articles/G-7LacDyB1681711847655/THE-ICECREAM-CONSPIRACY.jpg",
  },
  {
    id: 3,
    name: "Latte",
    price: "$4.00",
    image:
      "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?cs=srgb&dl=pexels-teejay-1362534.jpg&fm=jpg",
  },
  {
    id: 4,
    name: "Croissant",
    price: "$2.50",
    image: "https://www.pngall.com/wp-content/uploads/2016/04/Ice-Cream.png",
  },
  {
    id: 5,
    name: "Muffin",
    price: "$3.00",
    image:
      "http://images4.fanpop.com/image/photos/23600000/ice-cream-sss-ice-cream-23645841-1920-1200.jpg",
  },
  {
    id: 6,
    name: "Espresso",
    price: "$3.30",
    image:
      "http://images6.fanpop.com/image/photos/34700000/Chocolate-Ice-Cream-ice-cream-34732673-1500-998.jpg",
  },
];

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);
  const [toastItem, setToastItem] = useState("");

  const handleAddToCart = (item) => {
    addToCart(item);
    setToastItem(item.name);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000); // auto-hide after 2 seconds
  };

  return (
    <Container className="my-5 menu-container">
      <Row>
        {menuItems.map((item) => (
          <Col key={item.id} md={4} className="mb-4 d-flex">
            <Card className="menu-card w-100">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: {item.price}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 9999 }}
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">Cart</strong>
          </Toast.Header>
          <Toast.Body>{toastItem} added to cart!</Toast.Body>
        </Toast>
      </div>
    </Container>
  );
};

export default Menu;
