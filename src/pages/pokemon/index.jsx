import Layout from "@/container/Layout/Layout";
import Link from "next/link";

const Pokemon = () => {

    return (
        <Layout>
            <h1>Pokemons</h1>

            <p>La route « /pokemon/XX » permet de consulter les informations d'un pokemon via son numero de pokedex</p>
            <br/>

            <p>
                Exemple : 
                <br/>
                <Link href='/pokemon/25'>Pickachu → N°25</Link>
                <br/>
                <Link href='/pokemon/399'>Keunotor → N°399</Link>    
            </p>
        </Layout>
    );
};

export default Pokemon;