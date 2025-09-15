import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Data Architecture and Design",
      description: `
We help customers build a firm foundation for business intelligence by leveraging our expertise across the data lifecycle with strong architecture, solution design and data strategy.

Our expertise enables us to combine the best technologies and proven approaches to deliver the most effective results and provide you with solutions that can help you collect relevant, understandable, and accurate data displayed in real time.

We deliver on strategy, MVPs, PoCs and real-world ventures taking full advantage of big data and data lake paradigms.
      `,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Data Engineering",
      description: `
We ensure that we will not take a one-size-fits-all approach. We adhere to company obligations to form a custom data integration consulting solution for data integration needs. Our expertise encompasses combining data from different sources into a single, unified view to obtain useful information on technical and business processes.

We tailor each experience and ensure that our clients are satisfied with the results. Bring together the data by integrating structured and unstructured data from online and offline systems and add new data feeds quickly and easily. During ingestion we prioritise and process your data efficiently for immediate use and delivering value.
      `,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Advanced Analytics / Machine Learning",
      description: `
We offer end-to-end analytical solutions from Ideation to Deployment including Discovery, Design, Development and Deployment. The base of any machine learning use-case is data. With the help of data engineers who also understand the business, we bring in data from disparate sources and create a data-lake—one source of truth.

This source can be used for descriptive reporting with creative report authors, while our data scientists analyse trends and develop state-of-the-art machine learning models to predict the future, giving our clients a unique advantage over the competition.
      `,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Data Visualisation & Reporting",
      description: `
We aid customers in bringing data to life using Data Visualization, becoming the master storyteller of the insights hidden within numbers. Through live dashboards, interactive reports, charts and graphs, data visualization helps users develop powerful business insight quickly and effectively.

We understand the strategic value of information, data management, and Business Intelligence in decision-making, analyse large datasets with Business Intelligence/Analytics tools, and provide alternative solutions to complex problems.
      `,
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Data Governance",
      description: `
Data governance is the best way to help your organization become data-centric. We provide solutions to grow your business while ensuring internal and external policies are adhered to—easily, invisibly and frictionlessly.
      `,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // governance/security themed image
    },
    {
      title: "Master Data Management",
      description: `
Our key focus is to ensure you are using the most up-to-date and reliable data across business units—creating a single source of truth that can be shared and leveraged throughout the organisation.
      `,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cloud Computing Offering",
      description: `
We are experienced in a variety of cloud computing solutions, such as cloud migration strategy, cloud migration services and cloud-native design and development.

As a consulting and technology solutions company, we provide integrated solutions that complement technical cloud work. We offer full support for digital solutions on major cloud platforms including AWS, Azure and GCP.
      `,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Quality Assurance",
      description: `
Quality Assurance is one of the key aspects of our solution offering. We cover the full testing life cycle including Unit testing, System Integration testing, Regression and Performance automation testing. We can set up both manual and automated testing processes depending on a client’s needs or provide independent product analysis.
      `,
      image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Industry Experience Domain",
      description: `
Our team has solid domain knowledge across multiple industries, including Healthcare, Telecom, E-commerce, Construction, Super Market, Finance and Insurance, Aviation and Education.

We offer clients detailed reports and valuable feedback with recommendations on quality improvement, helping to implement better business solutions.
      `,
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div style={{ width: "100%", padding: "80px 20px", backgroundColor: "#f9f9f9" }}>
      <h2
        style={{
          fontSize: "3rem",
          textAlign: "center",
          marginBottom: "60px",
          fontWeight: "800",
          color: "#ff6600",
        }}
      >
        Our Services
      </h2>

      {services.map((s, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "80px",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <img
            src={s.image}
            alt={s.title}
            style={{
              flex: 1,
              maxWidth: "500px",
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            }}
          />
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "#ff6600" }}>
              {s.title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.7",
                color: "#555",
                whiteSpace: "pre-line",
              }}
            >
              {s.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
