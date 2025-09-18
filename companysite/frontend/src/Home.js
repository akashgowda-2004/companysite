// Home.js
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Services from "./Services";
import Careers from "./Careers";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    careers: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  const [showMore, setShowMore] = useState(false);

  const scrollToSection = (section) => {
    const ref = refs[section];
    if (ref?.current)
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar onSectionClick={scrollToSection} />

      {/* ---------- Home ---------- */}
      <section
        ref={refs.home}
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scrollAnimation}
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "40px",
            borderRadius: "12px",
            maxWidth: "900px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "700" }}>
            Data Prowess
          </h1>
          <p style={{ fontSize: "1.5rem", fontWeight: "400" }}>
            SOFTWARE DEVELOPMENT AND CONSULTING COMPANY
          </p>
        </motion.div>
      </section>

      {/* ---------- About ---------- */}
      <section
        ref={refs.about}
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 20px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
            borderRadius: "12px",
          }}
        ></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
            maxWidth: "1200px",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h2
              style={{
                fontSize: "3rem",
                color: "#ff6600",
                marginBottom: "25px",
                fontWeight: "700",
              }}
            >
              About Us
            </h2>
            <p style={{ fontSize: "1.3rem", lineHeight: "1.9", color: "#fff", marginBottom: "20px" }}>
              We provide{" "}
              <span style={{ color: "#ff6600" }}>
                Data Engineering, Analytics (Descriptive & Prescriptive), Application Development, Quality Assurance, and enterprise solutions.
              </span>
            </p>
            <p style={{ fontSize: "1.3rem", lineHeight: "1.9", color: "#fff", marginBottom: "20px" }}>
              Our core competency and thought leadership are built around data and analytics. We specialize in application development and testing, providing innovative solutions tailored to your business needs.
            </p>

            {showMore && (
              <>
                <p style={{ fontSize: "1.3rem", lineHeight: "1.9", color: "#fff", marginBottom: "20px" }}>
                  Our proficiencies drive exemplary new standards while accelerating changing needs for our clients.
                </p>
                <p style={{ fontSize: "1.3rem", lineHeight: "1.9", color: "#fff", marginBottom: "20px" }}>
                  Our expertise in data and analytics strengthens our ability to provide data-driven solutions for our Digital and Customer Engagement services, aided by our expertise in Cloud & Technology.
                </p>
                <p style={{ fontSize: "1.3rem", lineHeight: "1.9", color: "#fff", marginBottom: "20px" }}>
                  We are vendor agnostic, meaning we can provide independent advice on the best solution for your organisation.
                </p>
              </>
            )}
            <button
              onClick={() => setShowMore((prev) => !prev)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff6600",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "600",
                transition: "background 0.3s",
              }}
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            style={{ flex: 1, minWidth: "300px", textAlign: "center" }}
          >
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80"
              alt="About Data Prowess"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ---------- Services ---------- */}
      <section ref={refs.services}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
        >
          <Services />
        </motion.div>
      </section>

      {/* ---------- Careers ---------- */}
      <section ref={refs.careers}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
        >
          <Careers />
        </motion.div>
      </section>

      {/* ---------- Portfolio ---------- */}
      <section ref={refs.portfolio}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
        >
          <Portfolio />
        </motion.div>
      </section>

      {/* ---------- Contact ---------- */}
      <section ref={refs.contact}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
        >
          <div style={{ width: "100%", maxWidth: "1200px" }}>
            <Contact />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
