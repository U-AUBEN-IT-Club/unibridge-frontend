import { Users, Calendar, BookOpen } from 'lucide-react';
import FeatureCard from './FeatureCard';

/**
 * SECTION DES POINTS FORTS (Features.jsx)
 * 
 * Cette section liste les avantages ou fonctionnalités du projet.
 */
const Features = () => {
  // On crée un "tableau d'objets" qui contient les infos de chaque carte.
  // Ça évite de répéter le même code HTML 3 fois.
  const featuresData = [
    {
      title: "Espace communautaire",
      desc: "Un espace de networking pour discuter et partager avec les autres membres.",
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Actualité des universités",
      desc: "Ne ratez pas les dernières actualités des universités.",
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

      {/* La grille (grid) pour afficher les cartes côte à côte */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* On parcourt le tableau (.map) pour créer une <FeatureCard /> pour chaque élément */}
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index} // indispensable pour que React s'y retrouve
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