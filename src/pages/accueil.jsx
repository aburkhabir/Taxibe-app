
import { Link } from "react-router-dom";
import "../styles/accueil.css";

function Accueil() {
    return (
        <main className="accueil">

            <section className="hero">

                <div className="hero-content">

                    <span className="hero-tag">
                        VOTRE COMPAGNON DE VOYAGE
                    </span>

                    <h1>
                        TAXIBE<span>.</span>
                    </h1>

                    <h2>
                        Trouvez votre chemin,
                        <br />
                        prenez le bon taxi-be.
                    </h2>

                    <p>
                        Découvrez les itinéraires, les lignes et les
                        trajets de taxi-be à Antananarivo.
                        Déplacez-vous plus facilement avec Iraka.
                    </p>

                    <Link to="/itineraire" className="hero-button">
                        Trouver mon itinéraire →
                    </Link>

                    <div className="hero-credit">
                        By Minosoa
                    </div>

                </div>

                <div className="hero-decoration">
                    <div className="circle">
                        <span>BUS</span>
                        <strong>194</strong>
                        <small>ANTANANARIVO</small>
                    </div>
                </div>

            </section>

        </main>
    );
}

export default Accueil;