import React, { useState } from "react";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      // If you have backend, this will submit
      // const res = await apiPost("contact/", form, true);
      // setMsg(res.message || "✅ Message submitted!");

      // Temporary frontend-only submit
      console.log(form);
      setMsg("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setMsg("❌ Failed to submit message.");
    }
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "40px",
          maxWidth: "900px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "30px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            color: "#333",
          }}
        >
          <h2>Contact Form</h2>
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
          {msg && <p style={{ marginTop: "10px", fontWeight: "bold" }}>{msg}</p>}
        </form>

        {/* Office Info */}
        <div
          style={{
            flex: 1,
            padding: "30px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            color: "#333",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2>Our Office</h2>
          <p>Level 35, Tower One, International Towers</p>
          <p>100 Barangaroo Avenue, Sydney, NSW 2000 Australia</p>
          <p>📞 +61 424 479 526</p>
          <p>✉️ info@dataprowess.com.au</p>
        </div>
      </div>
    </section>
  );
}
