function ItineraireCard({ option, index }) {
    return (
        <div className="itineraire-card">
            <h3>Itinéraire {index + 1}</h3>

            <p>Durée : {option.faharetana_min} minutes</p>

            <p>Prix : {option.saran_dalana_ar} Ar</p>

            <p>Nombre de bus : {option.isan_ny_bus}</p>

            {option.dingana.map((etape, i) => (
                <div className="itineraire-etape" key={i}>
                    <h4>{etape.zotra}</h4>

                    <p>Monter à : {etape.miakatra}</p>

                    <p>Descendre à : {etape.midina}</p>
                </div>
            ))}
        </div>
    );
}

export default ItineraireCard;