//! Composant « Document » : 
//  - Définir le sequlette de base de la page
//  - Ne pas interagir avec le routing de NextJS (Pas d'utilisation de la balise "Link")

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
