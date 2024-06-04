import RegionList from "@/components/RegionList/RegionList";
import Layout from "@/container/Layout/Layout";
import { getRegionAll } from "@/services/region.service";

// ↓ Composant pré-rendu (avec si necessaire du code client)
const Region = ({ regions }) => {

    return (
        <Layout>
            <h1>Les regions</h1>
            <RegionList regions={regions} />
        </Layout>
    );
};

// ↓ Méthode serveur qui permet d'injecté des données dans le composant exporté
//  Il est possible d'utilise "getStaticProps" ou "getServerSideProps".
export const getStaticProps = async () => {
    // Pour cette page, on est en "SSG"

    //! Récuperation des données necessaire pour la page (via les services)
    const regionsData = await getRegionAll();

    //! La fonction "getStaticProps" doit renvoyer un objet JS
    return {
        // Injection des données au composant via ses props
        props: {
            regions : regionsData
        }
    }
}

export default Region;