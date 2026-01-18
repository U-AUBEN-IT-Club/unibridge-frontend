import { Users, Calendar, BookOpen } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  // Les données des cartes
  const featuresData = [
    {
      title: "Gestion des Membres",
      desc: "Gérez facilement les membres de votre club informatique.",
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Événements",
      desc: "Organisez et suivez les événements du club.",
      icon: <Calendar className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Ressources",
      desc: "Partagez des ressources et tutoriels avec les membres.",
      icon: <BookOpen className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-12">
        Fonctionnalités principales
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;