import Layout from "@/container/Layout/Layout";
import { getRegionAll, getRegionById } from "@/services/region.service";

// ↓ Composant "page" pré-rendu par le serveur
const RegionDetail = ({ region }) => {

    return (
        <Layout>
            <h1>{region.name}</h1>
            <h2>Génération : {region.generation}</h2>
            <p>{region.description}</p>
        </Layout>
    );
};

// Méthode pour définir les parametres sur une route dynamique en SSG
export const getStaticPaths = async () => {

    //! Définir les différentes valeurs de route qui seront recu
    //? Exemple "hard-codé" → Pas génial =/
    const pathsDemo = [
        { params: { id: '1' } },   //* /region/1
        { params: { id: '2' } },   //* /region/2
        { params: { id: '3' } },   //* /region/3
    ];

    //? Exploiter les données (via le service) pour construire l'objet "paths"
    //* Récuperation de données via le service 
    const regions = await getRegionAll();

    //* Construit l'objet "paths" via la fonction map et les données reçus
    const pathsRegion = regions.map(region => {
        return {
            params: { id: region.id.toString() }
        };
    });

    //! Envoi un objet JS qui indique les routes possibles et les options
    return {
        paths: pathsRegion, // Les routes possibles
        fallback: false     // Est ce qu'il doit générer les pages à la volé (→ non)
    };
};

// ↓ Méthode serveur qui permet d'injecter des données dans le composant "page"
export const getStaticProps = async ({ params }) => {

    //! Obtenir le parametre de la route
    //  → Le nom du parametre est définir par le nom du fichier via les [].
    const id = parseInt(params.id);

    //! Récuperer la region de l'id fourni par la route '/region/2'
    const regionData = await getRegionById(id);

    //! Envoi un objet JS avec les données necessaire à la page (props)
    return {
        props: {
            region: regionData
        }
    };
};

export default RegionDetail;