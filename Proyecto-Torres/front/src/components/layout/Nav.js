import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/empresa">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/inmuebles">Inmuebles</Link>
                    </li>
                    <li>
                        <Link to="/casas">Casas</Link>
                    </li>
                    <li>
                        <Link to="/deptos">Deptos</Link>
                    </li>
                    <li>
                        <Link to="/reservas">Reservas</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;