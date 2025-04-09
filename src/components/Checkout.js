import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "Credit Card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <Container className="my-5">
      <h2 className="text-center">Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Payment Method</Form.Label>
          <Form.Select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </Form.Select>
        </Form.Group>
        <h4 className="text-center">Total: {getTotalPrice()}</h4>
        <div className="text-center">
          <Button type="submit" variant="success">
            Place Order
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Checkout;
