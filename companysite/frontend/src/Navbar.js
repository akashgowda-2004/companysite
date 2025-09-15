import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

export default function Navbar({ onSectionClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = ["home", "about", "services", "careers", "portfolio", "contact"];

  const handleLinkClick = (link) => {
    onSectionClick(link);
    setMenuOpen(false);
  };

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <div style={styles.brand} onClick={() => onSectionClick("home")}>
        <img src={logo} alt="Data Prowess Logo" style={styles.logo} />
      </div>

      {/* Desktop Links */}
      {!isMobile && (
        <div style={styles.desktopLinks}>
          {links.map((link) => (
            <div key={link} style={styles.link} onClick={() => handleLinkClick(link)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </div>
          ))}
          <Link to="/admin/login" style={styles.loginBtn}>
            Admin Login
          </Link>
        </div>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <>
          <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>

          {menuOpen && (
            <div style={styles.mobileMenu}>
              {links.map((link) => (
                <div key={link} style={styles.mobileLink} onClick={() => handleLinkClick(link)}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </div>
              ))}
              <Link
                to="/admin/login"
                style={{ ...styles.mobileLink, ...styles.loginBtn }}
                onClick={() => setMenuOpen(false)}
              >
                Admin Login
              </Link>
            </div>
          )}
        </>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "rgba(0,0,0,0.85)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    zIndex: 1000,
  },
  brand: { display: "flex", alignItems: "center", cursor: "pointer" },
  logo: { height: "50px", width: "auto" },
  desktopLinks: { display: "flex", alignItems: "center", gap: "20px" },
  link: { color: "#fff", cursor: "pointer", fontWeight: 500 },
  loginBtn: {
    backgroundColor: "#1a73e8",
    color: "#fff",
    borderRadius: "6px",
    padding: "8px 20px",
    textDecoration: "none",
    fontWeight: 500,
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    gap: "4px",
    position: "absolute",
    right: "20px",
    top: "37px", // ~1 cm below top
  },
  bar: { width: "25px", height: "3px", backgroundColor: "#fff" },
  mobileMenu: {
    position: "absolute",
    top: "60px",
    right: 0,
    backgroundColor: "rgba(0,0,0,0.95)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "10px 0",
  },
  mobileLink: {
    color: "#fff",
    padding: "12px 0",
    cursor: "pointer",
    fontWeight: 500,
  },
};
