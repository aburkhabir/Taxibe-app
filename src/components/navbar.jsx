
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">Taxibe</h2>

            <ul className="navbar-links">
                <li>
                    <Link to="/">Accueil</Link>
                </li>

                <li>
                    <Link to="/itineraire">Itinéraire</Link>
                </li>

                <li>
                    <Link to="/about">À propos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;