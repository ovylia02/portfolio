import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <main>
            <section style={{ paddingTop: '50px' }}>
                <Container>
                    <div className="text-center">
                        <h2 className="subheading"><b>About Me</b></h2>
                    </div>
                    <br /><br />
                    <h4 className="subheading"><b>Hello World!</b></h4>
                    <br />
                    <p>
                        I am a Bachelor of Computer Science fresh graduate with a strong focus 
                        on software engineering and development. 
                        Since highschool, I have enjoyed coding and problem-solving, 
                        showcasing my passion early on by creating a robot in robotics club.
                        At university, I have taken electives that further honed my skills, 
                        such as object-oriented design and implementation, software development, 
                        databases, algorithms and data structures, and UI/UX.
                    </p>
                    <p>
                        During my final year, I was part of a project where I implemented existing 
                        NLP models to develop a patient medical history summarisation website.
                        I was able to showcase my leadership skills as well as software development 
                        skills.
                        Through these experiences, I have strengthened my logical thinking and 
                        coding abilities, preparing me for a career in software engineering 
                        and development.
                    </p>
                    <p>
                        <b>Education:</b> Bachelor of Computer Science in Data Science
                    </p>
                    <br /><br />
                    <div className="text-center">
                        <h2 className="subheading"><b>Skills</b></h2>
                    </div>
                    <br /><br />
                    <div style={{ paddingBottom: '50px' }}>
                        <Row>
                            <Col>
                                <h4>Web Development</h4>
                                <p>HTML5, CSS, Bootstrap, JavaScript, MEAN stack, React.js, Git</p>
                            </Col>
                            <Col>
                                <h4>Database</h4>
                                <p>SQL, Oracle SQL, PostgreSQL</p>
                            </Col>
                            <Col>
                                <h4>UI/UX</h4>
                                <p>Figma</p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <h4>Game Development</h4>
                                <p>Game design theory, Autodesk Maya for 3D modelling</p>
                            </Col>
                            <Col>
                                <h4>Algorithms and Data Structures</h4>
                                <p>Python</p>
                            </Col>
                            <Col>
                                <h4>Object-oriented Design and Implementation</h4>
                                <p>Java</p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <h4>Data Visualisation</h4>
                                <p>Tableau, Microsoft Power BI</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </main>
    );
};

export default AboutMe;
