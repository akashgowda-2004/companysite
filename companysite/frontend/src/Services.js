import React, { useEffect, useRef } from "react";
const servicesData = [
  {
    title: "Data Architecture and Design",
    description: `We help customers build a firm foundation for business intelligence by leveraging our expertise across the data lifecycle with strong architecture, solution design and data strategy.

Our expertise enables us to combine the best technologies and proven approaches to deliver the most effective results and provide you with solutions that can help you collect relevant, understandable, and accurate data displayed in real time.

We deliver on strategy, MVPs, PoCs and real-world ventures taking full advantage of big data and data lake paradigms.`,
    // same image as before
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Engineering",
    description: `We ensure a custom approach for data integration needs. Our expertise combines data from different sources into a single, unified view to obtain useful information on technical and business processes.

We tailor each experience and ensure that our clients are satisfied with the results. Bring together the data by integrating structured and unstructured data from online and offline systems and add new data feeds quickly and efficiently.`,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Advanced Analytics / Machine Learning",
    description: `We offer end-to-end analytical solutions from ideation to deployment including discovery, design, development and deployment. We create a data-lake—one source of truth—which is used for descriptive reporting and state-of-the-art machine learning models.`,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Visualisation & Reporting",
    description: `We bring data to life using Data Visualization, becoming the master storyteller of insights hidden within numbers. Through live dashboards, interactive reports, charts and graphs, users develop powerful business insight quickly and effectively.`,
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Governance",
    description: `Data governance is the best way to help your organization become data-centric. We provide solutions to grow your business while ensuring internal and external policies are adhered to—easily, invisibly and frictionlessly.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Master Data Management",
    description: `Our key focus is to ensure you are using the most up-to-date and reliable data across business units—creating a single source of truth that can be shared and leveraged throughout the organisation.`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Computing Offering",
    description: `We are experienced in a variety of cloud computing solutions, such as cloud migration strategy, cloud migration services and cloud-native design and development.

As a consulting and technology solutions company, we provide integrated solutions that complement technical cloud work. We offer full support for digital solutions on major cloud platforms including AWS, Azure and GCP.`,
    // 🔄 NEW cloud-specific image
    image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Quality Assurance",
    description: `Quality Assurance is one of the key aspects of our solution offering. We cover the full testing life cycle including Unit testing, System Integration testing, Regression and Performance automation testing. We can set up both manual and automated testing processes depending on a client’s needs or provide independent product analysis.`,
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Industry Experience Domain",
    description: `Our team has solid domain knowledge across multiple industries, including Healthcare, Telecom, E-commerce, Construction, Super Market, Finance and Insurance, Aviation and Education.

We offer clients detailed reports and valuable feedback with recommendations on quality improvement, helping to implement better business solutions.`,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
  },
];


export default function Services() {
  const imgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add("grow-in-view");
          } else {
            target.classList.remove("grow-in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    imgRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#ff6600",
            marginBottom: "20px",
          }}
        >
          Our Services
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "400",
            color: "#555",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Explore our expert services designed to help your business leverage
          data, analytics, cloud solutions, and more for impactful results.
        </h2>
      </div>

      {/* SERVICES LIST */}
      {servicesData.map((service, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "80px",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <img
            ref={(el) => (imgRefs.current[index] = el)}
            src={service.image}
            alt={service.title}
            style={{
              flex: "1 1 400px",
              maxWidth: "500px",
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              objectFit: "cover",
              transition: "transform 0.4s ease-out",
            }}
            className="service-image"
          />
          <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "10px",
                color: "#ff6600",
                fontWeight: "700",
              }}
            >
              {service.title}
            </h3>
            <div
              style={{
                width: "50px",
                height: "3px",
                backgroundColor: "black",
                marginBottom: "20px",
              }}
            ></div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.7",
                color: "#555",
                whiteSpace: "pre-line",
              }}
            >
              {service.description}
            </p>
          </div>
        </div>
      ))}

      {/* Inline CSS for the grow effect */}
      <style>{`
        .service-image {
          transform: scale(1);
        }
        .service-image.grow-in-view {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
