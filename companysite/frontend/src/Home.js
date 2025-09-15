import React, { useRef } from "react";
import Navbar from "./Navbar";
import Services from "./Services";
import Careers from "./Careers";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    careers: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar onSectionClick={scrollToSection} />

      {/* Home Section */}
      <section ref={refs.home} style={{ ...styles.fullSection, ...styles.home }}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>Data Prowess</h1>
          <p style={styles.subtitle}>SOFTWARE DEVELOPMENT AND CONSULTING COMPANY</p>
        </div>
      </section>

      {/* About Section */}
      <section ref={refs.about} style={{ ...styles.autoSection, ...styles.about }}>
        <div style={styles.overlayAbout}></div>
        <div style={styles.aboutContainer}>
          <div style={styles.aboutText}>
            <h2 style={styles.aboutTitle}>About Us</h2>
            <p style={styles.aboutParagraph}>
              Data Prowess is a Software Development and Consulting company dedicated to excellence. We provide Data Engineering, Analytics (Descriptive & Prescriptive), Application Development, Quality Assurance, and enterprise solutions.
            </p>
            <p style={styles.aboutParagraph}>
              Our core competency and thought leadership are built around data and analytics. We specialize in application development and testing, providing innovative solutions tailored to your business needs.
            </p>
          </div>
          <div style={styles.aboutImageContainer}>
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80"
              alt="About Data Prowess"
              style={styles.aboutImage}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={refs.services} style={styles.centeredSection}>
        <Services />
      </section>

      {/* Careers Section */}
      <section ref={refs.careers} style={{ ...styles.centeredSection, ...styles.careers }}>
        <Careers />
      </section>

      {/* Portfolio Section */}
      <section ref={refs.portfolio} style={{ ...styles.centeredSection, ...styles.portfolio }}>
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section ref={refs.contact} style={styles.contactSection}>
        <div style={styles.contactContainer}>
          <div style={styles.contactLeft}>
            <div style={styles.contactFormWrapper}>
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  fullSection: { height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundSize: "cover", backgroundPosition: "center", position: "relative" },
  autoSection: { minHeight: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "60px 20px", backgroundSize: "cover", backgroundPosition: "center", position: "relative" },
  overlay: { backgroundColor: "rgba(0,0,0,0.6)", padding: "40px", borderRadius: "12px", maxWidth: "900px", textAlign: "center", color: "#fff" },
  overlayAbout: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1, borderRadius: "12px" },
  title: { fontSize: "3rem", marginBottom: "20px", fontWeight: "700", color: "#fff" },
  subtitle: { fontSize: "1.5rem", fontWeight: "400", color: "#fff" },

  home: { backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')" },
  about: { backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')" },

  aboutContainer: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", flexWrap: "wrap", maxWidth: "1200px", width: "100%", position: "relative", zIndex: 2 },
  aboutText: { flex: 1, minWidth: "300px" },
  aboutTitle: { fontSize: "3rem", color: "#fff", marginBottom: "25px", fontWeight: "700" },
  aboutParagraph: { fontSize: "1.3rem", lineHeight: "1.9", color: "#fff", marginBottom: "20px" },
  aboutImageContainer: { flex: 1, minWidth: "300px", textAlign: "center" },
  aboutImage: { width: "100%", maxWidth: "500px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.3)" },

  centeredSection: { width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "60px 20px", backgroundSize: "cover", backgroundPosition: "center", position: "relative" },
  careers: { backgroundImage: "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1920&q=80')" },
  portfolio: { backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1920&q=80')" },

  contactSection: { minHeight: "100vh", width: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center", padding: "60px 20px", flexDirection: "column", position: "relative" },
  contactContainer: { display: "flex", flexWrap: "wrap", width: "100%", maxWidth: "1200px", gap: "40px", position: "relative", zIndex: 2 },
  contactLeft: { flex: 2, minWidth: "350px", display: "flex", flexDirection: "column", gap: "30px" },
  contactFormWrapper: { backgroundColor: "rgba(255, 255, 255, 0.95)", padding: "30px", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" },
};
