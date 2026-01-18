import { Monitor, Home, GraduationCap, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * BARRE DE NAVIGATION (Navbar.jsx)
 * 
 * Ce composant affiche le menu en haut de toutes les pages.
 * Il utilise "Link" de react-router-dom pour changer de page 
 * sans recharger tout le site (navigation SPA).
 */
const Navbar = () => {
  return (
    // "sticky" : La barre reste accrochée en haut quand on défile la page.
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO : Lien vers la page d'accueil */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Monitor className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Unibridge</span>
          </Link>

          {/* LIENS DE NAVIGATION */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Lien Accueil */}
            <Link to="/" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Accueil</span>
            </Link>

            {/* Lien Universités */}
            <Link to="/universities" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition">
              <Building2 className="h-4 w-4" />
              <span className="hidden sm:inline">Universités</span>
            </Link>

            {/* Lien Étudiants */}
            <Link to="/students" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Étudiants</span>
            </Link>

            {/* Bouton de Connexion (Style différent) */}
            <Link to="/login" className="ml-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition shadow-sm">
              Connexion
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;