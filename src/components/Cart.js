import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } =
    useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      alert("Please login first to place your order!");
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cart.map((item, index) => (
              <Col
                key={index}
                md={12}
                className="mb-3 d-flex justify-content-between align-items-center border-bottom pb-3"
              >
                <div>
                  <h5>{item.name}</h5>
                  <p>
                    Price: ₹{parseFloat(item.price.replace("$", "")).toFixed(2)}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Total: ₹
                    {(
                      parseFloat(item.price.replace("$", "")) * item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Col>
            ))}
          </Row>
          <h4 className="text-center mt-4">
            Grand Total: ₹{getTotalPrice().toFixed(2)}
          </h4>
          <div className="text-center">
            <Button variant="primary" className="me-2" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
            <Button variant="secondary" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
