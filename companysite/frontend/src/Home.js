import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        style={styles.hero}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div style={styles.overlay}>
          <h1>Data Prowess</h1>
          <p>SOFTWARE DEVELOPMENT AND CONSULTING COMPANY</p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        style={styles.about}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div style={styles.overlayLight}>
          <h2>About Us</h2>
          <p>
            Data Prowess is a software development and consulting company. We are
            dedicated to excellent software development and testing with a
            comprehensive service suite encompassing Data Engineering, Data
            Analytics, design and development, quality assurance, and other
            digital transformation enterprise solutions.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        style={styles.services}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div style={styles.overlay}>
          <h2>Our Services</h2>
          <p>
            We provide services like Data Architecture, Data Engineering,
            Analytics, Visualization, Governance, and more.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        style={styles.contact}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div style={styles.overlay}>
          <h2>Contact Us</h2>
          <p>Email: info@dataprowess.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </motion.section>
    </div>
  );
}

const styles = {
  hero: {
    height: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')", // Modern tech/corporate
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    position: "relative",
  },
  about: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
    textAlign: "center",
    color: "#fff",
  },
  services: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
    textAlign: "center",
    color: "#fff",
  },
  contact: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1920&q=80')", // Contact theme (office desk, laptop, phone)
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
    textAlign: "center",
    color: "#fff",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "40px",
    borderRadius: "10px",
  },
  overlayLight: {
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: "40px",
    borderRadius: "10px",
    color: "#000",
  },
};
