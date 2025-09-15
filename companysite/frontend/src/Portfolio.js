import React from "react";
import { motion } from "framer-motion";
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "Project One",
      image: project1,
      description: "A web application built with React and Node.js.",
    },
    {
      title: "Project Two",
      image: project2,
      description: "Data visualization dashboard using D3.js.",
    },
    {
      title: "Project Three",
      image: project3,
      description: "E-commerce platform with full payment integration.",
    },
  ];

  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h2
        style={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h2>

      <div style={styles.projectsContainer}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            style={styles.projectCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 25px rgba(0,0,0,0.4)" }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={styles.projectImage}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px 20px",
    color: "#fff",
    textAlign: "center",
    scrollSnapAlign: "start",
  },
  title: { fontSize: "3rem", marginBottom: "40px" },
  projectsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  projectCard: {
    backgroundColor: "rgba(255,255,255,0.9)",
    color: "#111",
    borderRadius: "12px",
    width: "300px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
  },
  projectImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "15px",
  },
};
