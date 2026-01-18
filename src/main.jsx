import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * POINT D'ENTRÉE PRINCIPAL (main.jsx)
 * 
 * C'est ici que l'aventure commence ! 
 * Ce fichier fait le pont entre ton code HTML (le fichier index.html) 
 * et ton application React (le composant App.jsx).
 */

// On récupère l'élément HTML qui a l'ID "root" (dans index.html)
// et on lui dit : "C'est ici que tu vas afficher mon application React".
createRoot(document.getElementById('root')).render(
  // StrictMode est un outil qui aide à trouver des problèmes potentiels 
  // dans le code pendant le développement.
  <StrictMode>
    {/* On affiche le composant principal App */}
    <App />
  </StrictMode>,
)
