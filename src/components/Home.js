import React from 'react';
import { Container, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <main className="home">
            <section>
                <Container className="px-4 py-5 text-center">
                    <h2 className="display-5 fw-bold">Ovylia Lie &#128048;</h2>
                    <Col lg={6}>
                        <p className="lead fw-bold">Bachelor&nbsp;of&nbsp;Computer&nbsp;Science</p>
                    </Col>
                </Container>
            </section>
        </main>           
    );
};

export default Home;
