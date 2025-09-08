import React, { useState } from "react";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const links = [
    { id: "home", label: "Home", action: () => scrollToSection("home") },
    { id: "about", label: "About", action: () => scrollToSection("about") },
    { id: "services", label: "Services", action: () => scrollToSection("services") },
    { id: "contact", label: "Contact", action: () => scrollToSection("contact") },
    { id: "logout", label: "Logout", action: handleLogout },
  ];

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Data Prowess</h2>
      <div style={styles.links}>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={link.action}
            onMouseEnter={() => setHovered(link.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...styles.link,
              borderBottom:
                hovered === link.id ? "2px solid white" : "2px solid transparent",
            }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "2px",
    cursor: "pointer",
  },
  links: { display: "flex", gap: "25px" },
  link: {
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "uppercase",
    paddingBottom: "4px",
    transition: "border-bottom 0.3s ease",
  },
};
