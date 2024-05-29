import React from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  TwitterCircleFilled,
  LinkedinFilled,
  InstagramFilled,
  GithubFilled,
} from "@ant-design/icons";
import "../AboutUs.css";

const { Title, Paragraph } = Typography;

const teamMembers = [
  {
    name: "Prof. Yike Shen",
    role: "Principal Investigator",
    description: (
      <span>
        Assistant Professor who likes to advance Environmental Health through
        Machine Learning and Multi-Omics Research
      </span>
    ),
    extra: "Assistant Professor at University of Texas at Arlington",
    image: "yike.jpeg",
    social: {
      twitter: "https://twitter.com/@shen_yike",
      linkedin: "https://www.linkedin.com/in/yikeshen",
      github: "https://github.com/YikeShen",
    },
  },
  {
    name: "Steve Adjorlolo",
    role: "Ph.D. Student",
    description: (
      <span>
        MEng in Petroleum Engineering at University of Calgary (Canada), B.Eng.
        in Petroleum Engineering at China University of Petroleum (China)
      </span>
    ),
    extra: "Ph.D. student at University of Texas at Arlington",
    image: "StevePic.png",
    social: {
      linkedin: "https://www.linkedin.com/in/sadjorlolo/",
      github: "https://github.com/YidanZhang",
    },
  },
  {
    name: "Yidan Zhang",
    role: "Ph.D. student",
    description: (
      <span>
        MS in Epidemiology and Health Statistics at Sun Yat-sen University
        (China), BS in Public Health at Shanxi Medical University (China).
      </span>
    ),
    extra: "Ph.D. student at University of Texas at Arlington",
    image: "logo.jpg",
    social: {
      linkedin: "https://linkedin.com/in/YidanZhang",
      github: "https://github.com/YidanZhang",
    },
  },
  {
    name: "Dhruvil Chodvadiya",
    role: "Graduate Student",
    description: (
      <span>
        Master student in Computer Science and Engineering and Software Engineer
        with a passion for building scalable web applications
      </span>
    ),
    extra: "Graduate Student at University of Texas at Arlington",
    image: "DhruPic.png",
    social: {
      twitter: "https://twitter.com/DhruvilChodvadiya",
      linkedin: "https://linkedin.com/in/DhruvilChodvadiya",
      github: "https://github.com/Dhruvil-Chodvadiya",
    },
  },
  {
    name: "Katherine Atkins",
    role: "Undergraduate Student",
    description: (
      <span>
        Undergraduate student in Environmental Science as a Major with Data
        Science Minor
      </span>
    ),
    extra: "Undergraduate at University of Texas at Arlington",
    image: "KatyPic.png",
    social: {
      linkedin: "https://linkedin.com/in/KatherineAtkins",
      github: "https://github.com/KatherineAtkins",
    },
  },
  {
    name: "Aaron Kuang",
    role: "High school student",
    description: <span>High school passionate to explore the industry.</span>,
    extra: "High school student, Greenhill High School",
    image: "logo.jpg",
    social: {
      linkedin: "https://linkedin.com/in/AaronKuang",
      github: "https://github.com/AaronKuang",
    },
  },
];

const AboutUs = () => {
  const handleImageError = (e) => {
    e.target.src = "defaultImage.jpeg"; // Fallback image URL
  };

  return (
    <div className="about-us-container">
      <Title level={2} className="about-us-header">
        Meet the Team
      </Title>
      <Row gutter={[16, 16]}>
        {teamMembers.map((member, index) => (
          <Col key={index} xs={24} sm={12} lg={8}>
            <Card className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
                onError={handleImageError}
                style={{ maxWidth: "100px", marginRight: "10px" }}
              />
              <Title level={4}>{member.name}</Title>
              <Paragraph className="role">{member.role}</Paragraph>
              <Paragraph>{member.description}</Paragraph>
              <Paragraph className="extra-info">{member.extra}</Paragraph>
              <div className="social-icons">
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterCircleFilled />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinFilled />
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramFilled />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubFilled />
                  </a>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutUs;
