
import { useState } from "react";

// Importation de la fonction depuis irakaApi.js
import { getItineraire } from "../api/irakaApi";

import ItineraireCard from "../components/itineraireCard.jsx";

import "../styles/itineraire.css"

// Déclaration du composant React
function Itineraire() {

    // State qui stocke le lieu de départ
    const [depart, setDepart] = useState("");

    // State qui stocke la destination
    const [destination, setDestination] = useState("");

    // State qui stocke les résultats reçus de l'API
    const [resultat, setResultat] = useState(null);

    // State qui indique si une requête est en cours
    const [loading, setLoading] = useState(false);

    // State qui stocke les éventuelles erreurs
    const [erreur, setErreur] = useState("");

    // Fonction exécutée lors du clic sur le bouton Rechercher
    async function handleSearch() {

        try {
            // Début du chargement
            setLoading(true);

            // Réinitialisation de l'erreur précédente
            setErreur("");

            // Appel de l'API Iraka et attente de sa réponse
            const data = await getItineraire(depart, destination);
        } catch (error) {

            // Récupération du message d'erreur
            setErreur(error.message);

        } finally {

            // Arrêt du chargement, même en cas d'erreur
            setLoading(false);
        }
        console.log("Résultat API :", data);
    }

    // Partie JSX : interface utilisateur
    return (
        <div className="itineraire-page">

            <h1 className="itineraire-title">
                Recherche d'itinéraire
            </h1>

            <div className="search-form">
                <input
                    className="search-input"
                    placeholder="Départ"
                    value={depart}
                    onChange={(e) => setDepart(e.target.value)}
                />

                <input
                    className="search-input"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />

                <button className="search-button" onClick={handleSearch}>
                    Rechercher
                </button>
            </div>

            {loading && <p className="loading">Chargement...</p>}

            {erreur && <p className="error">{erreur}</p>}

            {resultat && resultat.valiny && (
                <div>
                    <h2 className="route-title">
                        {resultat.valiny.niaingana.nosoratana}
                        {" → "}
                        {resultat.valiny.toerana_aleha.nosoratana}
                    </h2>

                    {resultat.valiny.safidy.map((option, index) => (
                        <ItineraireCard
                            key={index}
                            option={option}
                            index={index}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}

// Exportation du composant
export default Itineraire;
