//! Le composant « App » 
//  - Permet d'ajouter un CSS Global !
//  - Encapsule les autres pages
//  - Permet d'injecter des données (via les props)

import "@/styles/globals.css";
import Head from "next/head";
import { Roboto } from "next/font/google";

//* Remarque : L'import commencant par "@/..." permet de définir
//* le chemin en partant du dossier « src » de notre projet.

//? Gestion de "Font" optimisé par Next
// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
const roboto = Roboto({ subsets: ["latin"], weight: '300' });


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Demo NextJS</title>
        <meta name="description" content="Formation Frontend BXL2024" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/gif" href="/pokeball.gif" />
      </Head>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};