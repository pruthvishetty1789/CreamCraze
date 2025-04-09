import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Offers from "./components/Offers";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import AdminDashboard from "./components/AdminDashboard";
import "./styles.css";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Location from "./pages/Location";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/location" element={<Location />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
