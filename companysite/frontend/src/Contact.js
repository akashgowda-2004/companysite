import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
  };

  return (
    <div style={{ padding: "60px 15px", background: "linear-gradient(to right, #f8f9fa, #eef1f5)" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "800",
          marginBottom: "30px",
          color: "#ff6600",
        }}
      >
        Get in Touch
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
          }}
        >
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={inputStyle} />
          <textarea name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} required rows="5" style={inputStyle} />
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #ff6600, #ff8533)",
              color: "#fff",
              padding: "14px",
              fontSize: "1rem",
              fontWeight: "600",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Send Message
          </button>
        </form>

        {/* Office Info */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ color: "#ff6600", fontSize: "1.5rem", marginBottom: "15px" }}>
            Our Office
          </h3>
          <p>
            711, 2nd Floor, Modi Hospital Rd, <br />
            West of Chord Road, 2nd Stage, <br />
            Rajaji Nagar, Bengaluru, Karnataka – 560086
          </p>
          <p>📞 +91 63664 62576</p>
          <p>✉️ info@data-prowess.com</p>

          <h4 style={{ marginTop: "20px", color: "#ff6600" }}>Business Hours</h4>
          <p>Mon - Fri: 9:00 AM – 6:00 PM</p>
          <p>Sat: 10:00 AM – 2:00 PM</p>
          <p>Sun: Closed</p>

          <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
            <a href="https://www.linkedin.com/company/data-prowess" target="_blank" rel="noreferrer" style={iconStyle}>
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/dataprowess" target="_blank" rel="noreferrer" style={iconStyle}>
              <FaGithub size={28} />
            </a>
            <a href="https://twitter.com/dataprowess" target="_blank" rel="noreferrer" style={iconStyle}>
              <FaTwitter size={28} />
            </a>
          </div>

          <div style={{ marginTop: "30px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.539819183391!2d77.55204047484472!3d12.938906987377853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd0c7b85c23%3A0xa69b084f14b1b09!2sRajajinagar%2C%20Bengaluru%2C%20Karnataka%20560010!5e0!3m2!1sen!2sin!4v1694576421302!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 480px) {
            h2 {
              font-size: 1.6rem !important;
            }
            form, .office-info {
              padding: 18px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  fontSize: "1rem",
  outline: "none",
  transition: "0.2s",
};

const iconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  background: "#f1f1f1",
  transition: "0.3s",
  color: "#ff6600",
  textDecoration: "none",
  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
};
