import { ArrowRight } from 'lucide-react';

/**
 * SECTION HÉROS (Hero.jsx)
 * 
 * C'est la première chose que l'on voit en arrivant sur le site.
 * Elle a pour but de présenter le projet et donner envie d'explorer.
 */
const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 text-center sm:px-6 lg:px-8">
      {/* Titre Principal Accrocheur */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
        Plateforme <span className="text-blue-600">Unibridge</span>
      </h1>

      {/* Petit texte explicatif */}
      <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-10 leading-relaxed">
        Bienvenue sur le projet Open source Unibridge.
        Le pont entre les universités et les étudiants passionnés.
      </p>

      {/* Bouton d'Action (Appel à l'action / CTA) */}
      <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
        Explorer les universités
        <ArrowRight className="h-5 w-5" />
      </button>
    </section>
  );
};

export default Hero;