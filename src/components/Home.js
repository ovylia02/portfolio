import React from 'react';
import { Container, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <main>
            <section>
                <Container className="px-4 py-5 my-5 text-center">
                    <h2 className="display-5 fw-bold">Ovylia Lie &#128048;</h2>
                    <Col lg={6} className="mx-auto">
                        <p className=" lead fw-bold">Bachelor of Computer Science</p>
                    </Col>
                </Container>
            </section>
        </main>           
    );
};

export default Home;
