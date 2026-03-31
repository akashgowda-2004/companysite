import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";
import "./responsive.css";

// Protected admin route
function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  if (!token || username !== "admin123") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

// Example of fetching data inside a component
function HomeWrapper() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/jobs/`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return <Home jobs={jobs} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public site */}
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
