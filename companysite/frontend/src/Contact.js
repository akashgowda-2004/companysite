import React, { useState } from "react";
import Navbar from "./Navbar";
import { apiPost } from "./api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await apiPost("contact/", form, true); // true = requires auth
      setMsg(res.message || "✅ Message submitted!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setMsg("❌ Failed to submit message.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <Navbar />
      <div style={styles.container}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ height: "120px", resize: "none" }}
          />
          <button type="submit">Send Message</button>
        </form>
        {msg && <p>{msg}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
};
