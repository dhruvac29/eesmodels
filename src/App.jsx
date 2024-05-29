import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Views from "./Routes";
// Import the image
import logo from "./assets/logo.png"; // Ensure the path to your image is correct
import "./theme.css";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: (
      <Link to="/" className="menu-link">
        Home
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to="/about" className="menu-link">
        About Us
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link to="/contact" className="menu-link contact-link">
        Contact Us
      </Link>
    ),
  },
];

const App = () => {
  return (
    <Layout
      style={{ minHeight: "100vh", background: "var(--background-color)" }}
    >
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "var(--header-background-color)",
          padding: "0 24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Replace the EnvironmentOutlined icon with an img tag */}
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "32px",
              height: "32px",
              marginRight: "10px",
            }}
          />
          <Link
            to="/"
            style={{
              color: "var(--text-color-light)",
              fontSize: "24px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Earth and Environmental Department
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            background: "var(--header-background-color)",
            borderBottom: "none",
          }}
        >
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              style={{ borderRadius: "40px", borderBottom: "none" }}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 48px",
          background: "var(--background-color)",
        }}
      >
        <Views />
      </Content>
      <Footer
        style={{
          textAlign: "center",
          background: "var(--footer-background-color)",
          color: "var(--text-color-light)",
        }}
      >
        ©{new Date().getFullYear()} Environmental Department USA, All rights
        reserved.
      </Footer>
    </Layout>
  );
};

export default App;
