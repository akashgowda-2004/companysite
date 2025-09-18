import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import resolutionLogo from "./assets/resolutionlife.png";
import lendleaseLogo from "./assets/lendlease.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Reset body margin & padding to avoid gaps
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleDirections = () => {
    const officeAddress = encodeURIComponent(
      "711, 2nd Floor, Modi Hospital Road, West of Chord Road, 2nd Stage, Rajaji Nagar, Bengaluru, Karnataka – 560086"
    );
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${officeAddress}`,
      "_blank"
    );
  };

  const styles = {
    section: {
      width: "100vw",
      minHeight: "100vh",
      background: "#f9f9f9",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      padding: "80px 0", // vertical padding only
      boxSizing: "border-box",
    },
    overlay: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      boxSizing: "border-box",
      padding: "0 20px", // horizontal padding only for content
    },
    heading: {
      textAlign: "center",
      color: "#ff6600",
      fontSize: "2.8rem",
      fontWeight: "800",
      marginBottom: "40px",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      justifyContent: "center",
    },
    card: {
      background: "#fff",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      flex: "1 1 360px",
      minWidth: "300px",
    },
    input: {
      padding: "12px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      fontSize: "1rem",
      width: "100%",
      marginBottom: "12px",
      outline: "none",
      boxSizing: "border-box",
    },
    textarea: {
      padding: "12px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      fontSize: "1rem",
      width: "100%",
      marginBottom: "12px",
      resize: "none",
      outline: "none",
      boxSizing: "border-box",
    },
    btnPrimary: {
      background: "linear-gradient(90deg, #ff6600, #ff8533)",
      color: "#fff",
      border: "none",
      padding: "14px",
      borderRadius: "10px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
    },
    btnSecondary: {
      marginTop: "16px",
      background: "#ff6600",
      color: "#fff",
      border: "none",
      padding: "12px 18px",
      borderRadius: "10px",
      fontWeight: "600",
      cursor: "pointer",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "12px",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: "#f3f3f3",
      color: "#ff6600",
    },
    map: {
      width: "100%",
      height: "240px",
      border: "0",
      borderRadius: "12px",
      margin: "20px 0",
    },
    subHeading: {
      color: "#ff6600",
      marginBottom: "12px",
      textAlign: "center",
    },
    clientsSection: {
      marginTop: "60px",
      textAlign: "center",
    },
    clientLogos: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "40px",
      marginTop: "20px",
    },
    clientLogo: {
      maxWidth: "150px",
      objectFit: "contain",
      transition: "transform 0.3s",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.overlay}>
        <h2 style={styles.heading}>Get in Touch</h2>
        <div style={styles.grid}>
          {/* Contact Form */}
          <div style={styles.card}>
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                style={styles.textarea}
              />
              <button type="submit" style={styles.btnPrimary}>
                Send Message
              </button>
            </form>
          </div>

          {/* Office Info */}
          <div style={styles.card}>
            <h3 style={styles.subHeading}>Our Office</h3>
            <p style={{ textAlign: "center" }}>
              711, 2nd Floor, Modi Hospital Road,
              <br />
              West of Chord Road, 2nd Stage,
              <br />
              Rajaji Nagar, Bengaluru, Karnataka – 560086
            </p>
            <p style={{ textAlign: "center" }}>📞 +91 63664 62576</p>
            <p style={{ textAlign: "center" }}>✉️ info@data-prowess.com</p>

            <h4 style={styles.subHeading}>Business Hours</h4>
            <p style={{ textAlign: "center" }}>Mon – Fri: 9:00 AM – 6:00 PM</p>
            <p style={{ textAlign: "center" }}>Sat: 10:00 AM – 2:00 PM</p>
            <p style={{ textAlign: "center" }}>Sun: Closed</p>

            <div style={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/company/data-prowess"
                target="_blank"
                rel="noreferrer"
                style={styles.socialIcon}
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/dataprowess"
                target="_blank"
                rel="noreferrer"
                style={styles.socialIcon}
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://twitter.com/dataprowess"
                target="_blank"
                rel="noreferrer"
                style={styles.socialIcon}
              >
                <FaTwitter size={20} />
              </a>
            </div>

            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=711, 2nd Floor, Modi Hospital Road, Rajaji Nagar, Bengaluru&output=embed"
              loading="lazy"
              style={styles.map}
            />
            <button onClick={handleDirections} style={styles.btnSecondary}>
              Get Directions
            </button>
          </div>
        </div>

        {/* Our Clients */}
        <div style={styles.clientsSection}>
          <h3 style={styles.subHeading}>Our Clients</h3>
          <div style={styles.clientLogos}>
            <img
              src={resolutionLogo}
              alt="Resolution Life"
              style={styles.clientLogo}
            />
            <img src={lendleaseLogo} alt="Lendlease" style={styles.clientLogo} />
            
          </div>
        </div>
      </div>
    </section>
  );
}
