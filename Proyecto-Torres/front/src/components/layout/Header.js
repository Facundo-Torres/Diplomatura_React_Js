import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
    return (
        <Navbar bg="danger" variant="dark" className="p-3">
            <Navbar.Brand>
                <img
                    src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/logosoybnb.png'}
                    alt="logo"
                    width="auto"
                    height="auto"
                />
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;
