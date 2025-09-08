import React from "react";
import service1 from "./assets/service1.jpg";
import service2 from "./assets/service2.jpg";
import service3 from "./assets/service3.jpg";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Data Architecture",
      description: "Design and manage scalable and robust data systems.",
      image: service1,
    },
    {
      title: "Data Engineering",
      description: "Build pipelines to process and transform data efficiently.",
      image: service2,
    },
    {
      title: "Analytics & Visualization",
      description: "Turn data into actionable insights and beautiful visualizations.",
      image: service3,
    },
  ];

  return (
    <section id="services" style={styles.section}>
      <h2 style={styles.heading}>Our Services</h2>
      <div style={styles.cardContainer}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <img src={service.image} alt={service.title} style={styles.image} />
            <h3 style={styles.title}>{service.title}</h3>
            <p style={styles.desc}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)", // gradient background
    color: "#fff",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "50px",
    fontWeight: "700",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  card: {
    width: "300px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "20px",
    color: "#333",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "15px",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    fontWeight: "600",
  },
  desc: {
    fontSize: "1rem",
    color: "#555",
  },
};
