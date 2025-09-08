import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiPost } from "./api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(""); // clear old messages
    try {
      await apiPost("register/", form, false);

      setMsg("✅ Registration successful! Redirecting to Login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      if (err && typeof err === "object") {
        if (err.username) setMsg(err.username[0]);
        else if (err.email) setMsg(err.email[0]);
        else if (err.password) setMsg(err.password[0]);
        else if (err.detail) setMsg(err.detail);
        else setMsg("❌ Registration failed. Please check your input.");
      } else {
        setMsg("⚠️ Network error. Please try again.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            required
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        {msg && <div style={styles.msg}>{msg}</div>}

        <p style={styles.linkText}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage:
      "url('https://sharovarskyi.com/blog/posts/dotnet-obs-plugin-with-nativeaot/static/obs.jpg')", // ✅ same background as login
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // ✅ semi-transparent white card
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
  title: { marginBottom: "30px", fontSize: "28px", color: "#333" },
  form: { display: "flex", flexDirection: "column" },
  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1a73e8",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "16px",
  },
  msg: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#d32f2f",
    whiteSpace: "pre-line",
  },
  linkText: { marginTop: "20px", fontSize: "14px", color: "#333" },
};
