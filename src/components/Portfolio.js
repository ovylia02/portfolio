import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <main>
            <section style={{ paddingTop: '50px' }}>
                <Container style={{ paddingBottom: '50px' }}>
                    <div className="text-center">
                        <h2 className="subheading"><b>Portfolio</b></h2>
                    </div>
                    <br /><br />
                    <Row>
                        <Col md={12}>
                            <div className="project-box">
                                <Row>
                                    <Col xs={4}>
                                        <Image src={`${process.env.PUBLIC_URL}/project4.jpg`} className="project-image" fluid />
                                    </Col>
                                    <Col xs={8}>
                                        <h4>Smart Home Device Mobile Application UI design</h4>
                                        <p>
                                            I collaborated with my team to design the UI of a mobile application for smart home devices,
                                            while adhering to usability and accessibility guidelines.
                                            It allows users to easily manage their devices by viewing the energy usage summary, managing
                                            device settings, scheduling device operations, and viewing instructions.
                                        </p>
                                        <p>
                                            Technology used: Figma
                                        </p>
                                        <Button
                                                href="https://www.figma.com/proto/QzD60o2oIWiivDm5742Nw4/Assignment-4?page-id=0
                                                    %3A1&node-id=528-1409&viewport=651%2C773%2C0.24&t=cBgGOQ2IfpCQf54F-
                                                    1&scaling=scale-down&starting-point-node-id=528%3A1409&show-proto-sidebar=1"
                                                className="project-button">
                                            View Project
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="project-box">
                                <Row>
                                    <Col xs={4}>
                                        <Image src={`${process.env.PUBLIC_URL}/project3.jpg`} className="project-image" fluid />
                                    </Col>
                                    <Col xs={8}>
                                        <h4>Patient Medical History Summarisation capstone project</h4>
                                        <p>
                                            I collaborated with my team to develop a website created to provide an efficient method
                                            for doctors to read summarised patient medical notes by using NLP techniques.
                                            The website enables healthcare professionals to view a patient's medical timeline accompanied
                                            by summarised notes, generated using Hugging Face' transformers' BioGPT and BART text models.
                                            Key features include a Patient Details summary and Discharge and Radiology timelines and notes.
                                        </p>
                                        <p>
                                            Technology used: HTML5, CSS, Bootstrap, Git, PostgreSQL, Figma, Python | Raw data source: <a href="https://physionet.org/content/mimic-iv-note/2.2/">PhysioNet</a>
                                        </p>
                                        <Button href="https://github.com/olie0001/medical_summary_fit3164" className="project-button">View Project</Button>
                                    </Col>
                                </Row>
                            </div> 
                        </Col>
                        <Col md={12}>
                            <div className="project-box">
                                <Row>
                                    <Col xs={4}>
                                        <Image src={`${process.env.PUBLIC_URL}/project2.jpg`} className="project-image" fluid />
                                    </Col>
                                    <Col xs={8}>
                                        <h4>Volcanoes in Indonesia visualisation</h4>
                                        <p>
                                            This data visualisation analyses the trend in volcanic eruptions in Indonesia, aiming
                                            to provide insights into the characteristics of these events.
                                            Key features include a map that visualises the number of casualties categorised by 
                                            volcano type, eruption strengths over the years for each volcano type, the number 
                                            of eruptions based on volcano type, and the top deadliest volcanoes in Indonesia.
                                        </p>
                                        <p>
                                            Technology used: HTML5, CSS, Vega-lite | Raw data source: <a href="https://www.kaggle.com/datasets/elizabethdgroot/volcanoevents02021">Kaggle</a>
                                        </p>
                                        <Button href="https://olie0001.github.io/3179_assignment2/" className="project-button">View Project</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="project-box">
                                <Row>
                                    <Col xs={4}>
                                        <Image src={`${process.env.PUBLIC_URL}/project1.jpg`} className="project-image" fluid />
                                    </Col>
                                    <Col xs={8}>
                                        <h4>Video Game Sales visualisation</h4>
                                        <p>
                                            This data visualisation analyses the trend in video game sales from the
                                            years 1980-2020, providing insights into genres, platforms, and publishers.
                                            Key features of this visualisation includes top video game publishers,
                                            top genres, and top platforms based on the genres. It also shows a visual of
                                            video game sales per region.
                                        </p>
                                        <p>
                                            Technology used: Tableau | Raw data source: <a href="https://www.kaggle.com/datasets/gregorut/videogamesales">Kaggle</a>
                                        </p>
                                        <Button href="https://public.tableau.com/app/profile/ovylia.lie/viz/video_game_sales_16616900705400/Video_Game_Sales_db" className="project-button">View Project</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default Portfolio;
