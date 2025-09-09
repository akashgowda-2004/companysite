import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Services from "./Services";
import Contact from "./Contact";
import Portfolio from "./Portfolio"; // ✅ import Portfolio

export default function Home() {
  return (
    <div style={styles.scrollContainer}>
      <Navbar />

      {/* Hero Section */}
      <motion.section id="home" style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Data Prowess</h1>
          <p style={styles.heroSubtitle}>
            SOFTWARE DEVELOPMENT AND CONSULTING COMPANY
          </p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" style={styles.about}>
        <div style={styles.aboutOverlay}>
          <h2>About Us</h2>
          <div style={styles.aboutContent}>
            <div style={styles.aboutText}>
              <p>
                Data Prowess is a software development and consulting company
                dedicated to excellence. We provide a comprehensive suite of
                services including Data Engineering, Data Analytics (Descriptive
                & Prescriptive), Application Development, Quality Assurance, and
                digital transformation enterprise solutions.
              </p>
              <p>
                Data is our heritage and has always been at the core of
                everything we do. Our mission is to enable customers to use
                their data and analytics to build competitive advantage.
              </p>
              <p>
                Our expertise in data and analytics strengthens our ability to
                provide data-driven solutions for Digital and Customer
                Engagement services, supported by Cloud & Technology.
              </p>
              <p>
                Being vendor agnostic, we provide independent advice on the best
                solutions, with frameworks and best practices that accelerate
                technology adoption and delivery.
              </p>
            </div>
            <div style={styles.aboutImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="About Data Prowess"
                style={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" style={styles.sectionWrapper}>
        <Services />
      </section>

      {/* Careers Section */}
      <motion.section id="careers" style={styles.careers}>
        <div style={styles.careersOverlay}>
          <h2>Careers</h2>
          <p>Join our team and grow your career with Data Prowess.</p>
          <div style={styles.jobGrid}>
            <div style={styles.jobCard}>
              <h3>Frontend Developer</h3>
              <p>
                Build modern, responsive web applications with React, JavaScript
                and Tailwind CSS.
              </p>
              <ul>
                <li>Experience: 1-3 years</li>
                <li>Skills: React, HTML, CSS, JavaScript</li>
              </ul>
            </div>
            <div style={styles.jobCard}>
              <h3>Data Engineer</h3>
              <p>
                Work with large-scale data pipelines and ensure data quality and
                performance.
              </p>
              <ul>
                <li>Experience: 2-4 years</li>
                <li>Skills: Python, SQL, ETL, Cloud</li>
              </ul>
            </div>
            <div style={styles.jobCard}>
              <h3>QA Engineer</h3>
              <p>
                Ensure our applications meet the highest quality standards
                through manual and automation testing.
              </p>
              <ul>
                <li>Experience: 1-2 years</li>
                <li>Skills: Manual & Automation Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <section id="portfolio" style={styles.sectionWrapper}>
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.sectionWrapper}>
        <Contact />
      </section>
    </div>
  );
}

const styles = {
  scrollContainer: {
    height: "100vh",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
  },
  hero: {
    height: "100vh",
    scrollSnapAlign: "start",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroOverlay: {
    backgroundColor: "rgba(0,0,0,0.65)",
    padding: "60px",
    borderRadius: "12px",
    color: "#fff",
    textAlign: "center",
    maxWidth: "700px",
  },
  heroTitle: { fontSize: "3rem", marginBottom: "20px" },
  heroSubtitle: { fontSize: "1.2rem", fontWeight: "300" },

  about: {
    height: "100vh",
    scrollSnapAlign: "start",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
  },
  aboutOverlay: {
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: "50px",
    borderRadius: "12px",
    color: "#111",
    maxWidth: "1100px",
    lineHeight: "1.6",
  },
  aboutContent: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "40px",
  },
  aboutText: { flex: 1, fontSize: "1.05rem", textAlign: "justify" },
  aboutImageWrapper: { flex: 1, textAlign: "center" },
  aboutImage: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
  },

  sectionWrapper: {
    height: "100vh",
    scrollSnapAlign: "start",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
  },

  // Careers Section
  careers: {
    height: "100vh",
    scrollSnapAlign: "start",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
    textAlign: "center",
  },
  careersOverlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "50px",
    borderRadius: "12px",
    color: "#fff",
    maxWidth: "1100px",
    width: "100%",
  },
  jobGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    marginTop: "30px",
  },
  jobCard: {
    backgroundColor: "#fff",
    color: "#111",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    width: "300px",
    padding: "20px",
    textAlign: "left",
    transition: "transform 0.3s ease",
  },
};
