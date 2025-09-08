import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Services from "./Services";
import Contact from "./Contact";

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
            Data Prowess is a software development and consulting company dedicated
            to excellence. We offer services including Data Engineering, Data Analytics,
            Application Development, Quality Assurance, and digital transformation solutions.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

const styles = {
  hero: {
    height: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    position: "relative",
  },
  about: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
    textAlign: "center",
    color: "#fff",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "40px",
    borderRadius: "10px",
    maxWidth: "600px",
    width: "100%",
  },
  overlayLight: {
    backgroundColor: "rgba(255,255,255,0.85)",
    padding: "40px",
    borderRadius: "10px",
    color: "#000",
    maxWidth: "800px",
  },
};
