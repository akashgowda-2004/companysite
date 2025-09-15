import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaTools } from "react-icons/fa";

export default function Careers() {
  const [careers, setCareers] = useState([]);
  const [activeForm, setActiveForm] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", resume: null });
  const [messages, setMessages] = useState({});

  // Fetch job openings
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
      setMessages({
        ...messages,
        [careerId]: "Application submitted successfully!",
      });
      setFormData({ name: "", email: "", resume: null });
      setActiveForm(null);
    } catch {
      setMessages({
        ...messages,
        [careerId]: "Something went wrong. Try again.",
      });
    }
  };

  return (
    <div style={pageWrapper}>
      <h2 style={headerStyle}>Career Opportunities</h2>
      {messages.global && <p style={globalMessage}>{messages.global}</p>}

      <div style={cardsContainer}>
        {careers.length === 0 && (
          <p style={{ color: "#fff", fontSize: "1.2rem" }}>No job openings available.</p>
        )}

        {careers.map((career) => (
          <motion.div
            key={career.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            style={card}
          >
            <div style={cardHeader}>{career.title}</div>
            <p style={cardDesc}>{career.description}</p>
            <p style={info}><FaBriefcase /> <strong>Experience:</strong> {career.experience}</p>
            <p style={info}><FaTools /> <strong>Skills:</strong> {career.skills}</p>

            {activeForm === career.id ? (
              <>
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
                  style={{ ...primaryBtn, background: "#777" }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setActiveForm(career.id)}
                style={primaryBtn}
              >
                Apply
              </button>
            )}

            {messages[career.id] && (
              <p style={{ color: "#0f0", marginTop: "10px" }}>{messages[career.id]}</p>
            )}
          </motion.div>
        ))}
      </div>
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
  fontSize: "3.5rem",
  fontWeight: "900",
  textAlign: "center",
  marginBottom: "60px",
  background: "linear-gradient(90deg,#f59e0b,#facc15)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "1px",
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
  borderBottom: "2px solid #f59e0b",
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
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(90deg,#f59e0b,#fbbf24)",
  color: "#111827",
  cursor: "pointer",
  marginTop: "12px",
  width: "100%",
  fontWeight: "700",
  transition: "background 0.3s ease",
};
