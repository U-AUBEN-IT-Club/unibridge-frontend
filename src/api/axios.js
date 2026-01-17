import axios from 'axios';

/**
 * CONFIGURATION API 
 * C'est ici que l'on définit la connexion avec le Backend Django.
 */
const api = axios.create({
    // URL de ton API Django en local
    baseURL: 'http://127.0.0.1:8000/api/',

    // On définit le format d'échange de données (JSON)
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;