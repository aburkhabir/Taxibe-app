//URL a fetcher
const BASE_URL = "https://www.iraka.mg/api/v2/taxi-be/itineraire";

export async function getItineraire(depart, destination){
    const params = new URLSearchParams({
        //parametres de l url pour saisir depart et destination
        niaingana: depart,
        toerana_aleha: destination,
        api_key: "irk_test_iraka_taxibe_demo"//acces a l API
    });

    const response = await fetch(`${BASE_URL}?${params}`);//la requete GET
    if(!response.ok) {
        throw new Error("erreur lors de la recuperation de l itineraire")
    }

    //puis la variable response sera convertit en JSON
    const data = await response.json();

    return data;
}