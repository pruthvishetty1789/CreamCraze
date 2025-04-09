import React, { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext"; //

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin login
    if (email === "admin@idealcafe.com" && password === "admin123") {
      login({ email, role: "admin" });
      navigate("/admin");
      return;
    }

    // User login
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Login successful!");
      login(user);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <div className="mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </Container>
  );
};

export default Login;
