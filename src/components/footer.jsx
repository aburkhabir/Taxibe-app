import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Taxibe<span>.</span></h2>

                <p>
                    Votre compagnon pour vos déplacements
                    en taxi-be à Antananarivo.
                </p>
            </div>

            <div className="footer-links">
                <Link to="/">Accueil</Link>
                <Link to="/itineraire">Itinéraire</Link>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Taxibe. By Minosoa.</p>
                <span>
                    Conçu pour faciliter vos déplacements.
                </span>
            </div>
        </footer>
    );
}
export default Footer;