import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import Notepad from "../../Assets/Projects/notepad.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Todolist from "../../Assets/Projects/todolist.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              title="Todolist"
              description="Developed a personalized To-do list website enabling users to create customized daily task lists with user-defined names.Leveraged MongoDB Atlas for seamless database integration, ensuring secure storage of user data on the platform."
              ghLink="https://github.com/lokeshchintha/Todolist"
              demoLink="http://todolist.lokeshwebsites.tech/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/rahuljha4171/Portfolio-Website"
              demoLink="https://rahuljha.tech/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Notepad}
              title="Notepad"
              description="Created a web-based Notepad website that enable users to securely store their notes, utilizing cached data storage for seamless access.Implemented a user-friendly interface with a 'Compose' button in the navigation bar, facilitating easy note creation."
              ghLink="https://github.com/lokeshchintha/Notepad"
              demoLink="http://notepad.lokeshwebsites.tech/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
