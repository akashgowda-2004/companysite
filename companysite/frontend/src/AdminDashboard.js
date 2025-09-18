// src/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import bgImage from "./assets/admin-bg.jpg";

export default function AdminDashboard() {
  const [openings, setOpenings] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    experience: "",
    skills: "",
  });
  const [viewMore, setViewMore] = useState(null);

  /* ------------ Fetch job openings ------------ */
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/careers/")
      .then((res) => res.json())
      .then((data) => setOpenings(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  /* ------------ Add a new job ------------ */
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:8000/api/careers/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const newJob = await res.json();
      setOpenings((prev) => [...prev, newJob]);
      setForm({ title: "", description: "", experience: "", skills: "" });
    } catch (err) {
      console.error("Add job error:", err);
    }
  };

  /* ------------ Delete a job ------------ */
  const handleDelete = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/careers/${id}/`, { method: "DELETE" });
      setOpenings((prev) => prev.filter((job) => job.id !== id));
    } catch (err) {
      console.error("Delete job error:", err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ---------- HEADER ---------- */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
          Admin Dashboard
        </h1>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            background: "linear-gradient(135deg, #ff6600, #ff8533)",
            padding: "10px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Logout
        </button>
      </header>

      {/* ---------- MAIN ---------- */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "40px 20px",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* ---------- ADD JOB FORM ---------- */}
        <section
          style={{
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            borderRadius: "15px",
            padding: "30px",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <h2 style={{ marginBottom: "20px", textAlign: "center", color: "#ff6600" }}>
            Add Job Opening
          </h2>
          <form
            onSubmit={handleAdd}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              style={inputStyle}
              required
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              style={{ ...inputStyle, minHeight: "60px" }}
              required
            />
            <input
              placeholder="Experience"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
              style={inputStyle}
              required
            />
            <input
              placeholder="Skills"
              value={form.skills}
              onChange={(e) => setForm({ ...form, skills: e.target.value })}
              style={inputStyle}
              required
            />
            <button type="submit" style={addButtonStyle}>
              Add Opening
            </button>
          </form>
        </section>

        {/* ---------- CURRENT OPENINGS ---------- */}
        <section style={{ flex: 1, minWidth: "300px" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#ff6600",
            }}
          >
            Current Openings
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {openings.map((job) => (
              <div key={job.id} style={jobCardStyle}>
                <h3 style={{ color: "#ff8533" }}>{job.title}</h3>
                <p><strong>Description:</strong> {job.description}</p>
                <p><strong>Experience:</strong> {job.experience}</p>
                <p><strong>Skills:</strong> {job.skills}</p>

                <div style={{ marginTop: "15px" }}>
                  <button
                    onClick={() => handleDelete(job.id)}
                    style={deleteButtonStyle}
                  >
                    Delete Job
                  </button>
                  <button
                    onClick={() =>
                      setViewMore(viewMore === job.id ? null : job.id)
                    }
                    style={viewButtonStyle}
                  >
                    {viewMore === job.id ? "Hide Applicants" : "View Applicants"}
                  </button>
                </div>

                {viewMore === job.id && (
                  <div style={{ marginTop: "15px" }}>
                    <h4>Applicants:</h4>
                    {Array.isArray(job.applications) && job.applications.length > 0 ? (
                      <ul style={{ paddingLeft: "20px" }}>
                        {job.applications.map((a) => (
                          <li key={a.id}>
                            <strong>{a.name}</strong> – {a.email}{" "}
                            {a.resume ? (
                              <a
                                href={a.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#ff6600" }}
                              >
                                [Resume]
                              </a>
                            ) : (
                              <span style={{ color: "#ccc" }}>No resume</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No applicants yet.</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------- INLINE STYLE OBJECTS ---------- */
const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const addButtonStyle = {
  background: "#ff6600",
  color: "#fff",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background 0.3s",
};

const jobCardStyle = {
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(8px)",
  borderRadius: "15px",
  padding: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
};

const deleteButtonStyle = {
  background: "#e63946",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  marginRight: "10px",
  cursor: "pointer",
};

const viewButtonStyle = {
  background: "#1d3557",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
};
