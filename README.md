# unibridge - Frontend

# Plateforme de Gestion Inter-Universitaire (Club Informatique) 🚀

Cette plateforme est un projet ouvert du club informatique en partenariat avec d'autres club  d'universités partenaires. Elle a pour but d'etre un projet collaboratif et permettre de creer un reseau de networking interuniversitaire.

UniBridge est une plateforme centralisée permettant de gérer une communauté académique (étudiants, universités, ressources) via une interface moderne construite avec **React 19** et **Tailwind CSS v4**.

## ✨ Fonctionnalités Actuelles

- 📚 **Gestion des Étudiants (CRUD Complete)** : Lister, ajouter, modifier et supprimer des étudiants.
- 🏛️ **Gestion des Universités** : Administration des institutions partenaires liées aux étudiants.
- 🧭 **Routage Dynamique** : Navigation fluide sans rechargement de page via React Router.
- 🧠 **Gestion d'État Globale** : Utilisation de **Zustand** pour synchroniser les données dans toute l'app.
- ⚡ **Communication API** : Intégration robuste avec un backend Django REST via **Axios**.

## 🛠️ Stack Technique

- **Frontend core** : React 19 + Vite
- **Navigation** : React Router 7
- **Style** : Tailwind CSS v4 (Design moderne, glassmorphism, responsive)
- **Icônes** : Lucide React
- **State Management** : Zustand
- **API Client** : Axios

## 📦 Installation & Démarrage rapide

1. **Prérequis** : Node.js v18+.
2. **Installation** :
   ```bash
   npm install
   ```
3. **Lancement** :
   ```bash
   npm run dev
   ```
   *Accès : `http://localhost:5173`*

## 📂 Organisation du Code pour les Débutants

Tout le code dans `src/` est abondamment commenté en français pour faciliter l'apprentissage :

- `src/main.jsx` : Point d'entrée React.
- `src/App.jsx` : Définition des routes et de la structure globale.
- `src/store/` : Le "cerveau" de l'app (Zustand). C'est ici qu'on gère les données et les interactions avec le backend.
- `src/api/` : Configuration de la communication avec le serveur Django.
- `src/components/` : Les briques de construction (boutons, formulaires, listes).
- `src/pages/` : Les différentes vues du site (Accueil, Étudiants, etc.).

## 🛠️🛠️ Contraintes de Développement (Règles de l'équipe)

Pour maintenir la qualité du code et la cohérence du projet, chaque contributeur doit respecter les règles suivantes :

1. **Structure des Composants et Pages** : 
   - Les nouvelles pages doivent impérativement être créées dans le dossier `src/pages/` avec un fichier `page.jsx`.
   - Les composants réutilisables doivent être placés dans `src/components/`, organisés par dossiers thématiques (ex: `src/components/student/`).

2. **Gestion des Dépendances** :
   - Avant chaque `git commit`, si vous avez installé un nouveau package, assurez-vous qu'il est listé dans le `package.json`.
   - Utilisez `npm install` pour garantir la cohérence du `package-lock.json`.

3. **Documentation et Clarté (Pédagogie)** :
   - Chaque fonction, composant ou store **doit** être accompagné d'un commentaire pédagogique en français expliquant son rôle.
   - Les commentaires doivent être simples et compréhensibles pour meme les débutants.

4. **Configuration et API** :
   - Toute modification de l'adresse du serveur ou des paramètres globaux doit se faire dans `src/api/axios.js`.
   - Les modifications sensibles dans `vite.config.js` doivent être signalées par un commentaire explicite.

5. **Messages de Commit** :
   - Utilisez des messages explicites. 
   - *Exemple :* `Fix: Correction du bug d'affichage de la liste des étudiants` au lieu de `Modif`.

## 🤝 Contribution
Ce projet est open-source. N'hésitez pas à proposer des améliorations sur la partie design ou sur la structure des données !

> [!TIP]
> **Note sur l'IA** : L'utilisation des agents IA est un atout, mais évitez de les utiliser de manière abusive sans comprendre ce qu'ils génèrent. N'oubliez jamais que pour **comprendre**, il faut d'abord **apprendre**. Prenez le temps de lire le code généré !

---
### 👥 Contributeurs du projet
- **shwaib19** (Lead Developer / Administrateur)
- *nono-dd* (Développeur frontend / Concepteur de la version initiale)

---
*UniBridge - Bâtir des ponts entre le savoir et la pratique.*
