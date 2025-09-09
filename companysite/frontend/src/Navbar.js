import React from "react";

export default function Navbar({ activeSection }) {
  const navItems = ["home", "about", "services", "careers", "portfolio", "contact"];

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              style={{
                ...styles.navLink,
                fontWeight: activeSection === item ? "bold" : "normal",
                color: activeSection === item ? "#007BFF" : "#333",
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "#f0f0f0",
    padding: "15px 0",
    zIndex: 1000,
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    fontSize: "1rem",
    transition: "0.3s",
  },
};
