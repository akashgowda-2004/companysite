import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "Project One",
      description: "Short description of Project One.",
      image: project1,
    },
    {
      title: "Project Two",
      description: "Short description of Project Two.",
      image: project2,
    },
    {
      title: "Project Three",
      description: "Short description of Project Three.",
      image: project3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "900px" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>Our Portfolio</h2>
        <p style={{ marginBottom: "40px", fontSize: "1.2rem" }}>
          Some of our featured projects and case studies.
        </p>

        <motion.div
          style={{
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "12px",
            padding: "30px",
            color: "#111",
            maxWidth: "500px",
            margin: "0 auto",
          }}
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />
          <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
            {projects[currentIndex].title}
          </h3>
          <p style={{ fontSize: "1rem" }}>{projects[currentIndex].description}</p>
        </motion.div>
      </div>
    </section>
  );
}
