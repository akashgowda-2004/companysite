import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPost } from "./api";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await apiPost("login/", form, false);

      if (res && res.access) {
        // Save token + username to localStorage
        localStorage.setItem("token", res.access);
        localStorage.setItem("username", form.username);

        // Redirect based on user type
        if (form.username === "admin123") {
          setMsg("✅ Admin login successful! Redirecting...");
          setTimeout(() => navigate("/admin/dashboard"), 1000);
        } else {
          setMsg("✅ Login successful! Redirecting...");
          setTimeout(() => navigate("/"), 1000);
        }
      } else {
        setMsg("❌ Login failed. Check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMsg(
        err?.detail
          ? `❌ ${err.detail}`
          : "⚠️ Network or server error. Please try again."
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {msg && <div style={styles.msg}>{msg}</div>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage:
      "url('https://sharovarskyi.com/blog/posts/dotnet-obs-plugin-with-nativeaot/static/obs.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
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
};
