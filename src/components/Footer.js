import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{margin: 0, padding: 0}} className="p-4 text-center footer-style">
            <Container>
                <p>by Ovylia Lie</p>
                <p>
                    <u><a className="link-offset" href="https://www.linkedin.com/in/ovylia-lie">Linkedin</a></u>
                    &nbsp;
                    <u><a className="link-offset" href="https://github.com/ovylia02">GitHub</a></u>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
