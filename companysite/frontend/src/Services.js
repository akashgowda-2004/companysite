import React from "react";
import Navbar from "./Navbar";

export default function Services() {
  const services = [
    {
      title: "Data Architecture and Design",
      description: `We help customers to build a firm foundation for business intelligence by leveraging our expertise across the data lifecycle with strong architecture, solution design and data strategy.

Our expertise enables us to combine the best technologies and proven approach to deliver the most effective results and provide you with solutions that can help you collect relevant, understandable, and accurate data displayed in real time.

We deliver on strategy, MVPs, PoCs and real-world ventures taking full advantage of big data and data lake paradigms.`,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Data Engineering",
      description: `We ensure that we will not take a one-size-fits-all approach. And we adhere to company’s obligations to form a custom data integration consulting solution for data integration needs.

Our data integration expertise encompasses combining data from different sources into a single, unified view, to ultimately obtain useful information on technical and business processes.

We tailor each experience and ensure that our clients are satisfied with the results. Bring together the data by integrating structured and unstructured data from online and offline systems and add new data feeds quickly and efficiently.`,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Advanced Analytics / Machine Learning",
      description: `We offer End to End Analytical solutions from Ideation to deployment including Discovery, Design, Development and Deployment.

The base of any machine learning use-case is data. With the help of data engineers who also understand the business, we bring in data from disparate data sources and create a data-lake, which is one source of truth. This can be used for descriptive reporting and predictive ML models to give clients a unique advantage.`,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Data Visualisation & Reporting",
      description: `We aid customers brings data to life using Data visualization, making the master storyteller of the insights hidden within numbers.

Through live dashboards, interactive reports, charts, graphs, and other visual representations, data visualization helps users develop powerful business insight quickly and effectively.`,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Data Governance",
      description: `Data governance is the best way to help your organization become data centric. We provide solutions to grow your business while ensuring internal and external policies are adhering compliance Easily, Invisibly and Frictionless.`,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Master Data Management",
      description: `Our key focus is to ensure you are using the most up to date and reliable data across business units which is a single source of truth and can be shared and leveraged throughout the organisation.`,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Cloud Computing Offering",
      description: `We are experienced in a variety of cloud computing solutions, such as cloud migration strategy, cloud migration services and cloud-native design and development.

We offer full range of support for Digital solutions on major cloud platform including AWS, Azure and GCP.`,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Quality Assurance",
      description: `Quality Assurance is one of the key aspects of our solution offering. Data Prowess covers the full testing life cycle including Unit testing, System Integration testing, Regression and Performance automation testing.`,
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Industry Experience Domain",
      description: `Our team has solid domain knowledge across multiple industries, including healthcare, Telecom, e-commerce, Constructions, Super Market, Finance and Insurance, Aviation and Education.`,
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <Navbar />
      <section style={styles.container}>
        <h1 style={styles.title}>Our Services</h1>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <img src={service.image} alt={service.title} style={styles.image} />
            <h2 style={styles.cardTitle}>{service.title}</h2>
            <p style={styles.cardDesc}>{service.description}</p>
          </div>
        ))}
      </section>
      <footer style={styles.footer}>
        Copyright © 2025 Data Prowess
      </footer>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    marginBottom: "40px",
    fontWeight: "700",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    marginBottom: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "24px",
    marginBottom: "15px",
    color: "#667eea",
    fontWeight: "600",
  },
  cardDesc: {
    fontSize: "16px",
    color: "#555",
    lineHeight: 1.6,
  },
  footer: {
    padding: "20px 0",
    textAlign: "center",
    backgroundColor: "#667eea",
    color: "#fff",
    fontWeight: "500",
    marginTop: "40px",
  },
};
