import { Monitor, Home, Building2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Monitor className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Club Info</span>
          </div>

          {/* Liens */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-100 transition hover:bg-blue-100">
              <Home className="h-4 w-4" />
              Accueil
            </a>
            <a href="#" className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition">
              <Building2 className="h-4 w-4" />
              Universités
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;