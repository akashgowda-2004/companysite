// Careers.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaTools } from "react-icons/fa";

// ---------- TESTIMONIALS DATA ----------
const testimonials = [
  {
    feedback:
      "The team delivered exceptional data solutions, helping us make smarter business decisions faster.",
  },
  {
    feedback:
      "Their expertise in analytics and cloud computing transformed our workflows and efficiency.",
  },
  {
    feedback:
      "Professional, reliable, and highly skilled — they exceeded our expectations in every way.",
  },
];

export default function Careers() {
  const [careers, setCareers] = useState([]);
  const [activeForm, setActiveForm] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", resume: null });
  const [messages, setMessages] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/careers/")
      .then((res) => res.json())
      .then((data) => setCareers(data))
      .catch(() => setMessages({ global: "Error fetching job openings." }));
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, resume: e.target.files[0] });

  const handleApply = async (careerId) => {
    if (!formData.name || !formData.email || !formData.resume) {
      setMessages({ ...messages, [careerId]: "Please fill all fields." });
      return;
    }

    const data = new FormData();
    data.append("career", careerId);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("resume", formData.resume);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/applications/", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const errorData = await res.json();
        setMessages({
          ...messages,
          [careerId]: Object.values(errorData).flat().join(" "),
        });
        return;
      }

      setMessages({ ...messages, [careerId]: "Application submitted successfully!" });
      setFormData({ name: "", email: "", resume: null });
      setActiveForm(null);
    } catch {
      setMessages({ ...messages, [careerId]: "Something went wrong. Try again." });
    }
  };

  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div style={pageWrapper}>
      {/* ---------- HEADER ---------- */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        style={headerStyle}
      >
        Career Opportunities
      </motion.h2>
      {messages.global && <p style={globalMessage}>{messages.global}</p>}

      {/* ---------- JOB CARDS ---------- */}
      <div style={cardsContainer}>
        {careers.length === 0 && (
          <p style={{ color: "#fff", fontSize: "1.2rem" }}>
            No job openings available.
          </p>
        )}

        {careers.map((career) => (
          <motion.div
            key={career.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollAnimation}
            whileHover={{ scale: 1.05 }}
            style={card}
          >
            <div style={cardHeader}>{career.title}</div>
            <p style={cardDesc}>{career.description}</p>
            <p style={info}>
              <FaBriefcase /> <strong>Experience:</strong> {career.experience}
            </p>
            <p style={info}>
              <FaTools /> <strong>Skills:</strong> {career.skills}
            </p>

            {activeForm === career.id ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ marginTop: "15px" }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={input}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={input}
                />
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  style={input}
                />
                <button onClick={() => handleApply(career.id)} style={primaryBtn}>
                  Submit Application
                </button>
                <button
                  onClick={() => setActiveForm(null)}
                  style={{ ...primaryBtn, background: "#ff9900" }}
                >
                  Cancel
                </button>
              </motion.div>
            ) : (
              <button
                onClick={() => setActiveForm(career.id)}
                style={primaryBtn}
              >
                Apply
              </button>
            )}

            {messages[career.id] && (
              <p style={{ color: "#0f0", marginTop: "10px" }}>
                {messages[career.id]}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* ---------- TESTIMONIALS ---------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        style={testimonialSection}
      >
        <h2 style={testimonialHeader}>What Our Clients Say</h2>
        <div style={testimonialGrid}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.2 } }}
              viewport={{ once: true }}
              style={testimonialCard}
            >
              <p style={{ fontStyle: "italic", lineHeight: "1.6" }}>
                "{t.feedback}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- STYLES ---------- */
const pageWrapper = {
  minHeight: "100vh",
  padding: "80px 20px",
  background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const headerStyle = {
  fontSize: "4rem",
  fontWeight: "900",
  textAlign: "center",
  marginBottom: "80px",
  color: "#ff6600",
  letterSpacing: "1px",
  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
};

const globalMessage = { color: "red", textAlign: "center", marginBottom: "20px" };
const cardsContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  justifyContent: "center",
};

const card = {
  flex: "1 1 300px",
  maxWidth: "350px",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: "25px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
  color: "#f9fafb",
  transition: "transform 0.3s ease",
};

const cardHeader = {
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: "10px",
  color: "#fff",
  textAlign: "center",
  borderBottom: "2px solid #ff6600",
  paddingBottom: "8px",
};

const cardDesc = { fontSize: "1rem", marginBottom: "10px", color: "#e5e7eb" };
const info = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "0.95rem",
  color: "#d1d5db",
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "6px 0",
  borderRadius: "8px",
  border: "1px solid #9ca3af",
  fontSize: "1rem",
  background: "rgba(255,255,255,0.8)",
};

const primaryBtn = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#ff6600",
  color: "#fff",
  cursor: "pointer",
  marginTop: "12px",
  width: "100%",
  fontWeight: "700",
  transition: "background 0.3s ease",
};

const testimonialSection = {
  marginTop: "80px",
  padding: "40px 20px",
  width: "100%",
};

const testimonialHeader = {
  textAlign: "center",
  color: "#ff6600",
  marginBottom: "40px",
  fontSize: "2rem",
};

const testimonialGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
  justifyItems: "center",
};

const testimonialCard = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "15px",
  padding: "25px",
  textAlign: "center",
  color: "#fff",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
};
