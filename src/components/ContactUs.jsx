import React from "react";
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "../ContactUs.css";

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values:", values);
    // Handle form submission
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        {/* Embed Google Maps */}
        <iframe
          title="Map"
          className="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.3894930478993!2d-97.11847848427833!3d32.72904188097286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e71e11a1b0e37%3A0xf697fc7db95e861a!2s500%20Yates%20St%20Rm%20217%2C%20Arlington%2C%20TX%2076019%2C%20USA!5e0!3m2!1sen!2s!4v1621927357018!5m2!1sen!2s"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        <h2>Get in touch with us</h2>
        <p>
          <MailOutlined />{" "}
          <a href="mailto:yike.shen@uta.edu">yike.shen@uta.edu</a>
          <br />
          <PhoneOutlined /> <a href="tel:+18172726756">(817) 272-6756</a>
          <br />
          <EnvironmentOutlined /> 500 Yates Street, Room 217, Arlington, Texas
          76019
        </p>
      </div>
      <div className="contact-form">
        <Form
          form={form}
          name="contact"
          layout="vertical"
          onFinish={onFinish}
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              {
                required: true,
                message: "Please enter your email address",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Email address" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea placeholder="I'm interested in learning more about..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
