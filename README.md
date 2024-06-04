# **Introduction à Next JS** (Page Router)

Cette démo a pour but de monter le fonctionne de NextJS (Framework en React).

Il existe deux type de router dans NextJS : 
- Page _(Pré-génération avec rendu client)_
- App _(Composant Client + Composant Server)_

## Installation
Dans un terminal, faire la commande suivante :
```
npm create next-app@latest
```

Les options choisis pour la démo _(Router Page)_ :
```
√ What is your project named? ................................... demo-next
√ Would you like to use TypeScript? ............................. No
√ Would you like to use ESLint? ................................. Yes
√ Would you like to use Tailwind CSS? ........................... No
√ Would you like to use `src/` directory? ....................... Yes
√ Would you like to use App Router? (recommended) ............... No
√ Would you like to customize the default import alias (@/*)? ... No
```

## Objectif de Next JS
- Meilleur référencement du site (SEO)
- Application moins lourd pour le client
- Page pré-rendu

## Router Page VS App

### Page
- Prè-génération des pages
    - Rendu mémorisé :
        - SSG (Static Site Génération)
        - ISR (Incremental Static Regeneration)
    - Sur demande :
        - SSR (Server Side Rendering)

- Proxy API intégré
    - Permet de consommer des API avec des clefs caché via Next JS

- Fonctionnalité React CSR (Client Side Rendering)
    - Intéraction avec l'utilisateur _(onClick)_
    - Utilisation des hooks
    - Mise en place d'un state management (Redux, Recoil, Jotai, ...) identique

- Fonctionnement du routing
    - Le contenu du dossier « page » est exposé
    - Tous les composants du dossier sont accessibles


### App
- Deux "types" de composant
    - Client _(Annotation "use client" en debut de fichier)_
    - Serveur

- Proxy API intégré
    - Permet de consommer des API avec des clefs caché via Next JS
    - Plus de fonctionnalité 

- Fonctionnalité des composants Client
    - Interaction avec l'utilisateur _(onClick)_
    - Utilisation des hooks
    - Possibilité d'utiliser un state management (Redux, Recoil, Jotai, ...) entre composant Client

- Fonctionnalité des composants Serveur
    - Pas d'event client
    - Pas de hook
    - Logique "backend" _(Executé depuis le serveur)_
        - Consommer une API / une DB
        - Variable privé _(Clef d'API par exemple)_
    - Seul le rendu est envoyé au client

- Fonctionnement du routing
    - Le contenu du dossier « app » est exposé
    - Les composants sont accessible en fonction de leur nom, Via une convention de nommage.


## Structure de la démo 
Le site sera constitué des pages suivantes : 
```
 /              : Page d'accueil
 /region        : Page sur les régions (Listing du fichier JSON)
 /region/:id    : Page détail d'un region
 /pokemon       : Page sur les pokemons (Quelque lien vers des pokemons)
 /pokemon/:id   : Page détail d'un pokemon (Via la pokeapi)
 /about         : Page d'info avec un formulaire
```

La structure de fichier du dossier "pages" sera donc : 
```
index.jsx           /
region
    index.jsx       /region
    [id].jsx        /region/42
pokemon
    index.jsx       /pokemon
    [id].jsx        /pokemon/42
about.jsx           /about
```

## Fonctionnement du pré-rendu avec NextJS (Page)

### Types de pré-rendu possible
- **SSG** (Static Site Génération) :
\
Génération durant le build
\
Celle ci peut necessite des données externe (BD, API, ...)
\
_Exemple : Page About, Page d'un blog_

- **ISR** (Incremental Static Regeneration) :
\
Même fonctionnement que SSG, mais peut régénérer les pages.
\
Régénération possible : via un timer ou à la demande.
\
_Exemple : Page détail d'élement (qui pourrait être regénéré)_


- **SSR** (Server Side Rendering) :
\
Génération à la suite d'une requete. Sans sauvegarder le rendu.
\
_Exemple : Page de profil_

### Fonctionnement du choix de type
- Si le composant "page" est seul (sans méthode annexe) => **SSG**

- Si la page a besoin de donnée (via : DB, API, Json) 
    - Via la méthode "getStaticProps" => **SSG**/**ISR**
    - Via les méthodes "getStaticProps" et "getStaticPaths" => **SSG**/**ISR**
    - Via la méthode "getServerSideProps" => **SSR**

Pour définir que la page est en ISR (en non SSG), il faut ajouter la propriété "revalidate" à "getStaticProps".
\
Peu importe le type de pré-rendu choisi, il est toujours possible d'ajouter du code "client" dans les pages.
Ce qui permet de la rendre dynamique pour l'utilisateur.
\
_Remarque : durant le dev, toutes les pages sont en SSR !!!_