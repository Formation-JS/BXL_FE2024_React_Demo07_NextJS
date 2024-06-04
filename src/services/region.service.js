import pokemonData from '@/data/pokemon.json';

// Ce service va contenir toutes les méthodes d'interaction avec les données "Region".
// Celui-ci permet d'isoler la logique pour acceder au données (Db, API, Json, ...).

export const getRegionCount = async () => {

    return pokemonData.regions.length;
}

export const getRegionAll = async () => {

    return pokemonData.regions;
}

export const getRegionById = async (id) => {

    //! Méthode "find" : Permet d'obtenir un element d'une collection via un prédicat.
    //!                  Le prédicat est une fonction qui renvoi une valeur booléen.
    //!                  Si l'element n'est pas trouvé, la fonction renvoi "undefined"

    //? Explication du predicat :
    //  Pour chaque région, compare l'id de la region avec l'id recu en parametre

    return pokemonData.regions.find(region => region.id === id);
}