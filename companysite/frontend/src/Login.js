import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiPost } from "./api";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(""); // Clear old messages

    try {
      const res = await apiPost("login/", form, false);

      if (res && res.access) {
        localStorage.setItem("token", res.access);
        setMsg("✅ Login successful! Redirecting...");
        setTimeout(() => navigate("/home"), 1000); // Redirect to Home
      } else {
        setMsg("❌ Login failed. Check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err?.detail) setMsg(`❌ ${err.detail}`);
      else setMsg("⚠️ Network or server error. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

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
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {msg && <div style={styles.msg}>{msg}</div>}

        <p style={styles.linkText}>
          Don&apos;t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage:
      "url('https://sharovarskyi.com/blog/posts/dotnet-obs-plugin-with-nativeaot/static/obs.jpg')", // ✅ online background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // semi-transparent for readability
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
