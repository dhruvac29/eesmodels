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
import "./BCF.css";

const { Option } = Select;
const { Title, Paragraph } = Typography;
const { Dragger } = Upload;

const BCF = () => {
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
    <div className="bcf-container">
      <Card className="bcf-card">
        <Title level={2} className="bcf-header">
          Bio Concentration Factor Prediction Model
        </Title>
        <Paragraph style={{ textAlign: "justify" }}>
          Bio Concentration Factor (BCF) analysis is a vital method for
          assessing the potential accumulation of chemicals in living organisms,
          particularly aquatic species. By determining the ratio of a chemical's
          concentration in an organism to its concentration in the surrounding
          environment, BCF provides insights into the bioaccumulation potential
          of substances. This analysis typically involves laboratory tests where
          organisms are exposed to chemicals under controlled conditions, with
          BCF calculated based on equilibrium or kinetic measurements. Factors
          influencing BCF include the chemical's properties, biological
          characteristics of the organism, and environmental conditions. BCF
          analysis is essential for regulatory frameworks, environmental
          monitoring, and guiding safer chemical design, although it faces
          limitations due to variability and complexity in real-world
          applications.
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Dragger {...draggerProps} className="bcf-dragger">
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
            className="bcf-select"
          >
            <Option value="Option 1">GBRT</Option>
            <Option value="Option 2">Random Forest</Option>
            <Option value="Option 3">FCNN</Option>
            <Option value="Option 4">SVR</Option>
          </Select>

          <Button
            type="primary"
            onClick={handleProcessClick}
            block
            className="bcf-button"
          >
            Process
          </Button>
        </Space>

        {showStats && (
          <Row gutter={16} className="bcf-stats">
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

export default BCF;
