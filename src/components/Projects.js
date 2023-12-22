import { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('first');
  const [animate, setAnimate] = useState(false);

  const handleTabSelect = (selectedTab) => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500); // Adjust the duration to match your animation duration
    setActiveTab(selectedTab);
  };

  const projectsTab1 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const projectsTab2 = [
    {
      title: "Project in Tab 2",
      description: "Lorem Ipsum",
      imgUrl: projImg1,
    },
    {
      title: "Project in Tab 2",
      description: "Lorem Ipsum",
      imgUrl: projImg2,
    },
    {
      title: "Project in Tab 2",
      description: "Lorem Ipsum",
      imgUrl: projImg3,
    },
  ];

  const projectsTab3 = [
    {
      title: "Project in Tab 3",
      description: "Dolor Sit Amet",
      imgUrl: projImg1,
    },
    {
      title: "Project in Tab 3",
      description: "Dolor Sit Amet",
      imgUrl: projImg2,
    },
    {
      title: "Project in Tab 3",
      description: "Dolor Sit Amet",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>"My projects? An ever-evolving dance—two steps forward, one stumble, and lots of laughter."</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={handleTabSelect}>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first" className={`fade-in ${animate ? 'animated' : ''}`}>
                  <Row>
                    {projectsTab1.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className={`fade-in ${animate ? 'animated' : ''}`}>
                  <Row>
                    {projectsTab2.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third" className={`fade-in ${animate ? 'animated' : ''}`}>
                  <Row>
                    {projectsTab3.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};
