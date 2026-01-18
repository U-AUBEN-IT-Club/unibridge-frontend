
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from '@/pages/home/page';
import Login from '@/pages/login/page';
import StudentPage from '@/pages/students/page';
import UniversityPage from '@/pages/universities/page';

/**
 * COMPOSANT PRINCIPAL (App.jsx)
 * 
 * Ce composant est le "chef d'orchestre" de ton application.
 * Il définit la structure globale et les règles de navigation (le Routage).
 */
function App() {
  return (
    // Router : Enveloppe toute l'application pour activer la navigation entre les pages
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

        {/* La Navbar est affichée sur TOUTES les pages car elle est en dehors de <Routes> */}
        <Navbar />

        {/* main : Conteneur principal pour le contenu de chaque page */}
        <main>
          {/* Routes : Liste toutes les pages possibles de ton site */}
          <Routes>
            {/* Chaque Route dit : "Si l'URL est ceci, alors affiche ce composant" */}

            {/* Page d'accueil */}
            <Route path="/" element={<Home />} />

            {/* Page de connexion */}
            <Route path="/login" element={<Login />} />

            {/* Page de gestion des étudiants */}
            <Route path="/students" element={<StudentPage />} />

            {/* Page de gestion des universités */}
            <Route path="/universities" element={<UniversityPage />} />

          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;