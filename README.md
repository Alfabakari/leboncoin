LeBonCoin - Projet MERN
(Application de petites annonces inspirée de "Le Bon Coin")

📌 Description
Application web complète permettant aux utilisateurs de :
✅ S'inscrire et se connecter (avec système sécurisé JWT)
✅ Publier des annonces (CRUD complet)
✅ Parcourir les annonces (filtres par catégorie)

🚀 Technologies
Frontend : React, Material-UI, Axios

Backend : Node.js, Express, MongoDB (Atlas)

Authentification : JWT, bcrypt

🔧 Installation
1. Backend
bash
cd backend
npm install
npm run server
Configuration :

Créez un fichier .env dans backend/ avec :

env
MONGO_URI=votre_uri_mongodb_atlas
JWT_SECRET=votre_clé_secrète
2. Frontend
bash
cd frontend
npm install
npm start
🔗 URLs
Frontend : http://localhost:3000

Backend : http://localhost:5000

📋 Fonctionnalités
🔐 Authentification
Inscription (email, username, mot de passe)

Connexion/déconnexion sécurisée

📦 Annonces
Création/modification/suppression

Affichage avec filtres (catégorie, recherche)

Détails complets (auteur, date, prix)

🛠 Dépendances
Backend :

json
"express", "mongoose", "bcryptjs", "jsonwebtoken", "cors", "dotenv"
Frontend :

json
"react", "axios", "react-router-dom", "@mui/material"
⚠️ Dépannage
Erreur MongoDB : Vérifiez MONGO_URI dans .env

Erreur CORS : Ajoutez cors() dans server.js

Token invalide : Vérifiez JWT_SECRET

📜 Licence
Libre pour usage éducatif.

✨ Prêt à démarrer ?

bash
git clone [votre-repo]
cd leboncoin-mern
# Suivez les étapes d'installation ci-dessus !
