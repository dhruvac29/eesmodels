import React from "react";
import { Row, Col, Card, Button } from "antd";
import { EnvironmentOutlined, ExperimentOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../HomePage.css"; // Import the CSS file for animations

const HomePage = () => {
  const navigate = useNavigate();

  const handleBCFClick = () => {
    navigate("/bcf");
  };

  const handleToxicologyClick = () => {
    navigate("/toxicity");
  };

  return (
    <div style={{ height: "85vh", padding: "50px", background: "#f0f2f5" }}>
      <Row gutter={30} style={{ height: "100%" }}>
        <Col gutter={30} span={12} style={{ height: "100%" }}>
          <Card
            bordered={false}
            hoverable
            style={{
              height: "100%",
              backgroundColor: "#e6f7ff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <EnvironmentOutlined
              style={{ fontSize: "48px", color: "#1890ff" }}
            />
            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              Bioconcentration Factor (BCF)
            </div>
            <p>
              The bioconcentration factor (BCF) is a measure of the accumulation
              of a substance in an organism compared to its concentration in the
              surrounding environment. It is used to understand how chemicals
              move through and are stored in living organisms.
            </p>
            <Button type="primary" onClick={handleBCFClick}>
              Let's Go
            </Button>
          </Card>
        </Col>
        <Col gutter={30} span={12} style={{ height: "100%" }}>
          <Card
            bordered={false}
            hoverable
            style={{
              height: "100%",
              backgroundColor: "#fff1f0",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <ExperimentOutlined
              style={{ fontSize: "48px", color: "#ff4d4f" }}
            />
            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              Toxicology
            </div>
            <p>
              Toxicology is the scientific study of the adverse effects of
              chemical substances on living organisms and the ecosystem. It
              involves the detection, understanding, and prevention of harmful
              effects caused by chemicals.
            </p>
            <Button type="primary" onClick={handleToxicologyClick}>
              Let's Go
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
