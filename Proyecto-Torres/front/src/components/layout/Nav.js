import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <Navbar expand="lg" bg="danger" variant="dark">
            <div className="container-fluid">
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="text-white">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Empresa" className="text-white">
                            Empresa
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Casas" className="text-white">
                            Casas
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Depto" className="text-white">
                            Depto
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Reserva" className="text-white">
                            Reserva
                        </Nav.Link>
                    </Nav>
                    <Button variant="outline-light" className="me-2">
                        Logeo
                    </Button>
                    <Button variant="warning">Registrarte</Button>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Navigation;
