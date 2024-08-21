import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar className="navbar" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={`${process.env.PUBLIC_URL}/logo.PNG`}
                            alt="Logo"
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/portfolio">.home</Nav.Link>
                            <Nav.Link as={Link} to="/aboutme">.aboutme</Nav.Link>
                            <Nav.Link as={Link} to="/work">.portfolio</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
