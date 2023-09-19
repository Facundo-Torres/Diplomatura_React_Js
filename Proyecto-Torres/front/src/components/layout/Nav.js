import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-danger" data-bs-theme="danger">
            <div className="container-fluid">
                <div className="navbar-brand"></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/Empresa">Empresa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/Casas">Casas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/Depto">Depto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/Reserva">Reserva</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Logeo</button>
                <button type="button" className="btn btn-warning">Registrarte</button>
            </div>
        </nav>
    );
}

export default Nav;
