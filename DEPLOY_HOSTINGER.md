# Guide de Déploiement Hostinger Node.js

Ce guide vous explique pas à pas comment déployer l'application **The British Board for Education and Training** sur Hostinger en utilisant l'environnement **Node.js**.

---

## 1. Variables d'environnement pour démarrer

Dans le panneau Hostinger (**hPanel > Node.js > Variables d'environnement**) ou dans votre fichier `.env` sur le serveur, configurez les variables suivantes :

| Variable | Valeur recommandée | Description |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Active le mode optimisé de production pour Express et Node. |
| `PORT` | `3000` *(ou attribué auto)* | Le port d'écoute du serveur Node.js (géré automatiquement par Hostinger). |
| `APP_URL` | `https://votre-domaine.com` | L'URL officielle de votre site hébergé sur Hostinger. |
| `GEMINI_API_KEY` | *(facultatif)* | Clé API Google Gemini si vous activez des fonctions IA supplémentaires. |

---

## 2. Préparation du projet (Build)

L'application est développée avec **React 19 & Vite**. Pour être servie par Node.js, elle doit d'abord être compilée en fichiers statiques dans le dossier `dist/` :

```bash
# 1. Installer les dépendances
npm install

# 2. Générer le build de production
npm run build
```

Après cette commande, le dossier `dist/` contiendra tous les fichiers optimisés du site web.

---

## 3. Configuration sur Hostinger (hPanel Node.js)

1. Connectez-vous à votre compte **Hostinger** et accédez au **hPanel**.
2. Allez dans **Sites web** > Cliquez sur **Gérer** sur votre nom de domaine.
3. Dans la barre de recherche ou la section Avancé, cliquez sur **Node.js**.
4. Remplissez les champs de configuration :
   - **Version de Node.js** : Choisissez `Node.js 20.x` ou `22.x` (LTS recommandée).
   - **Répertoire de l'application (Application root)** : `public_html` (ou le dossier où vous placez vos fichiers).
   - **URL de l'application** : Choisissez votre nom de domaine principal (ou sous-domaine).
   - **Fichier de démarrage de l'application (Application startup file)** : `server.js`
   - **Mode de l'application** : `Production`.
5. Cliquez sur **Créer** ou **Enregistrer**.

---

## 4. Téléversement des fichiers sur Hostinger

Via le **Gestionnaire de fichiers** d'Hostinger (ou via FTP/SSH), déposez dans votre répertoire d'application (`public_html`) :

- Le dossier **`dist/`** (contenant le build généré à l'étape 2)
- Le fichier **`server.js`**
- Le fichier **`package.json`**
- Le fichier **`.env`** (avec vos variables de l'Étape 1)

*(Note : Ne téléversez **pas** votre dossier local `node_modules` car il est lourd et spécifique à votre OS).*

---

## 5. Installation des dépendances et Démarrage sur Hostinger

1. Dans le gestionnaire Node.js de Hostinger, cliquez sur **NPM Install** (ou lancez `npm install --omit=dev` via le terminal SSH).
2. Cliquez sur **Démarrer** (ou **Redémarrer**) l'application Node.js.
3. Visitez votre nom de domaine : l'application est en ligne !

---

## 6. Structure du serveur de production (`server.js`)

Le serveur Node.js créé :
- Sert directement les assets et pages du dossier `dist/`.
- Gère le routage SPA (Single Page Application) : toute URL inconnue renvoie vers `index.html` pour éviter les erreurs 404 lors du rechargement de page.
- Fournit un endpoint de santé : `https://votre-domaine.com/api/health`.
