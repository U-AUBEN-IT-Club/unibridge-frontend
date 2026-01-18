import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
        Plateforme <span className="text-blue-600">Club Info</span>
      </h1>
      
      <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-10 leading-relaxed">
        Bienvenue sur la plateforme de gestion du club informatique universitaire.
      </p>

      <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
        Explorer les universités
        <ArrowRight className="h-5 w-5" />
      </button>
    </section>
  );
};

export default Hero;