import React, { useState } from "react";

export default function JobApplicationForm({ career, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });
  const [status, setStatus] = useState(""); // "", "success", "error"

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.resume) {
      setStatus("error");
      return;
    }

    const data = new FormData();
    data.append("career", career.id); // career id comes from parent
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("resume", formData.resume);

    try {
      const response = await fetch("http://localhost:8000/core/apply/", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", resume: null });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Apply for: {career?.title}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Your Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Upload Resume</label>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
          style={styles.input}
          accept=".pdf,.doc,.docx"
          required
        />
        {formData.resume && (
          <p style={styles.fileName}>📎 {formData.resume.name}</p>
        )}

        <div style={styles.buttonContainer}>
          <button type="button" onClick={onClose} style={styles.cancelButton}>
            Cancel
          </button>
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </div>

        {status === "success" && (
          <p style={{ color: "green", marginTop: "10px" }}>
            ✅ Application submitted successfully!
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "red", marginTop: "10px" }}>
            ❌ Failed to submit application. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: { textAlign: "center", marginBottom: "20px", color: "#1a73e8" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  label: { fontWeight: "500" },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  fileName: { fontSize: "0.9rem", color: "#333" },
  buttonContainer: { display: "flex", justifyContent: "space-between" },
  cancelButton: {
    padding: "10px 20px",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#1a73e8",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
