// src/ProtectedLayout.js
import React from "react";
import { Navigate, Outlet, Link } from "react-router-dom";

export default function ProtectedLayout() {
  const token = localStorage.getItem("token");

  // If not logged in → redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "15px", background: "#333", color: "#fff" }}>
        <Link to="/" style={{ marginRight: "20px", color: "#fff" }}>Home</Link>
        <Link to="/services" style={{ marginRight: "20px", color: "#fff" }}>Services</Link>
        <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
      </nav>

      {/* Child routes will render here */}
      <Outlet />
    </div>
  );
}
