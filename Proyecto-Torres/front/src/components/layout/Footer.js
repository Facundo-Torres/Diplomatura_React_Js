import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/components/layout/Footer.css";

const Footer = (props) => {
    return (
        <footer className="bg-light text-center text-white">
            <Container className="p-4 pb-0">
                <Row className="mb-4">
                    <Col>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href={'/'} role="button">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#55acee' }} href={'/'} role="button">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href={'/'} role="button">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href={'/'} role="button">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }} href={'/'} role="button">
                            <i className="bi bi-github"></i>
                        </a>
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <Container>
                    <Row>
                        <Col>
                            <p className="text-white">
                                © 2020{' '}
                                <a className="text-white" href="https://www.google.com/">Man man man</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
