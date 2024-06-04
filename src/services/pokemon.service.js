import axios from "axios";
// Rappel pour l'installer -> npm i axios

export const getPokemonById = async (id) => {

    // L'url a consomer
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

    // Réaliser la requete avec Axios et renvoyé la promesse
    return axios.get(url)
        .then(({data}) => {
            // Mapping vers un objet pour notre projet
            return {
                id: data.id,
                name: {
                    en: data.names.find(val => val.language.name === 'en').name,
                    fr: data.names.find(val => val.language.name === 'fr').name
                },
                genus: data.genera.find(val => val.language.name === 'fr').genus,
                isLegendary: data.is_legendary,
                isBaby: data.is_baby
            }
        })
        .catch(() => {
            return null;
        });
}