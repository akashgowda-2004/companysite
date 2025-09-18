// Testimonials.js
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message: "Data Prowess transformed our analytics pipeline. Exceptional expertise and service!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Jane Smith",
    position: "CTO, FinSolutions",
    message: "Their team delivered high-quality solutions on time. Highly recommend!",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Michael Brown",
    position: "Product Manager, HealthTech",
    message: "Insightful, professional, and innovative. Truly a data-driven partner.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

export default function Testimonials() {
  return (
    <div style={{ width: "100%", padding: "80px 20px", backgroundColor: "#fff" }}>
      <h2 style={{ fontSize: "3rem", textAlign: "center", marginBottom: "60px", fontWeight: "800", color: "#ff6600" }}>
        Testimonials
      </h2>

      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            style={{
              flex: "1 1 300px",
              maxWidth: "350px",
              backgroundColor: "#f9f9f9",
              padding: "30px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={t.avatar}
              alt={t.name}
              style={{ width: "80px", height: "80px", borderRadius: "50%", marginBottom: "20px" }}
            />
            <p style={{ fontStyle: "italic", marginBottom: "20px" }}>"{t.message}"</p>
            <h4 style={{ margin: 0, fontWeight: "700", color: "#333" }}>{t.name}</h4>
            <p style={{ margin: 0, color: "#777" }}>{t.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
