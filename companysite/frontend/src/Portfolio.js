import React, { useState, useEffect } from "react";
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
    }, 2000); // change every 2 sec
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section id="portfolio" style={styles.section}>
      <div style={styles.portfolioOverlay}>
        <h2 style={styles.heading}>Our Portfolio</h2>
        <p style={styles.subheading}>
          Some of our featured projects and case studies.
        </p>

        <div style={styles.projectCard}>
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            style={styles.projectImage}
          />
          <h3 style={styles.title}>{projects[currentIndex].title}</h3>
          <p style={styles.desc}>{projects[currentIndex].description}</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    height: "100vh", // full screen
    display: "flex",
    justifyContent: "center", // horizontal center
    alignItems: "center", // vertical center
    background: "#f4f8ff",
    textAlign: "center",
  },
  portfolioOverlay: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#222",
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "30px",
  },
  projectCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    padding: "20px",
    transition: "all 0.5s ease-in-out",
  },
  projectImage: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  title: {
    fontSize: "1.6rem",
    fontWeight: "600",
    marginBottom: "10px",
  },
  desc: {
    fontSize: "1rem",
    color: "#555",
  },
};
