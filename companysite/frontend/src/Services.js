import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import service1 from "./assets/service1.jpg";
import service2 from "./assets/service2.jpg";
import service3 from "./assets/service3.jpg";

export default function Services() {
  const services = [
    {
      title: "Data Architecture",
      description: "We design and manage scalable, reliable, and secure data systems.",
      image: service1,
    },
    {
      title: "Data Engineering",
      description: "Build efficient pipelines to process, clean, and transform data.",
      image: service2,
    },
    {
      title: "Analytics & Visualization",
      description: "Turn raw data into actionable insights with beautiful dashboards.",
      image: service3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="services" style={styles.section}>
      <h2 style={styles.heading}>Our Services</h2>
      <p style={styles.subheading}>
        Explore the range of services we offer to help businesses grow with data.
      </p>

      <motion.div
        key={currentIndex} // triggers re-animation
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        style={styles.card}
      >
        <div style={styles.imageWrapper}>
          <img
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            style={styles.image}
          />
        </div>
        <h3 style={styles.title}>{services[currentIndex].title}</h3>
        <p style={styles.desc}>{services[currentIndex].description}</p>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(to bottom, #f9fafc, #eef2f7)",
    color: "#111",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#222",
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "50px",
  },
  card: {
    width: "350px",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "16px",
    padding: "25px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  imageWrapper: {
    overflow: "hidden",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
  },
  title: {
    fontSize: "1.6rem",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#222",
  },
  desc: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
  },
};
