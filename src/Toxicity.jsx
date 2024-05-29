// components/Toxicity.jsx
import React, { useState } from "react";
import {
  Button,
  Select,
  Typography,
  Space,
  Card,
  message,
  Upload,
  Row,
  Col,
  Statistic,
} from "antd";
import {
  InboxOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import "./Toxicity.css";

const { Option } = Select;
const { Title, Paragraph } = Typography;
const { Dragger } = Upload;

const Toxicity = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [showStats, setShowStats] = useState(false);

  const handleDropdownSelect = (value) => {
    setDropdownValue(value);
  };

  const handleProcessClick = () => {
    // Logic for processing the file and dropdown value can be added here
    setShowStats(true);
  };

  const draggerProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="toxicity-container">
      <Card className="toxicity-card">
        <Title level={2} className="toxicity-header">
          Toxicity Prediction Model
        </Title>
        <Paragraph style={{ textAlign: "justify" }}>
          Toxicology analysis is a scientific process that evaluates the adverse
          effects of chemical substances on living organisms and the
          environment. It involves the study of the dose-response relationship,
          mechanisms of action, and potential health risks associated with
          exposure to toxins. This analysis is critical for identifying harmful
          chemicals, determining safe exposure levels, and guiding regulatory
          policies to protect public health and the environment. By using
          laboratory experiments, computational models, and epidemiological
          studies, toxicology analysis helps in understanding how toxins
          interact with biological systems and in developing strategies for
          mitigating their impact.
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Dragger {...draggerProps} className="toxicity-dragger">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Dragger>

          <Select
            style={{ width: "100%" }}
            placeholder="Select an option"
            onChange={handleDropdownSelect}
            className="toxicity-select"
          >
            <Option value="Option 1">Autoencoder</Option>
            <Option value="Option 2">PCA 128</Option>
            <Option value="Option 3">Kernal PCA 128</Option>
            <Option value="Option 4">Random Forest</Option>
            <Option value="Option 5">Fully Connected Neural Network</Option>
            <Option value="Option 6">Ridge Regression</Option>
          </Select>

          <Button
            type="primary"
            onClick={handleProcessClick}
            block
            className="toxicity-button"
          >
            Process
          </Button>
        </Space>

        {showStats && (
          <Row gutter={16} className="toxicity-stats">
            <Col span={8}>
              <Card bordered={false}>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "#cf1322" }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Statistic
                  title="In Progress"
                  value={14.7}
                  precision={2}
                  valueStyle={{ color: "#d48806" }}
                  prefix={<ArrowRightOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
        )}
      </Card>
    </div>
  );
};

export default Toxicity;
