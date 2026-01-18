import axios from 'axios';

/**
 * CONFIGURATION API (axios.js)
 * 
 * Ce fichier sert de "tunnel" entre ton site et ton serveur (le Backend Django).
 * Au lieu de réécrire l'adresse du serveur partout, on la définit une seule fois ici.
 */
const api = axios.create({
    // L'adresse de base de ton serveur Django.
    // localhost ou 127.0.0.1 : c'est ton propre ordinateur.
    baseURL: 'http://127.0.0.1:8000/api/',

    // On dit au serveur qu'on communique en format JSON (le langage standard du Web).
    headers: {
        'Content-Type': 'application/json',
    }
});

// On exporte cette configuration pour pouvoir l'utiliser ailleurs dans le projet.
export default api; 