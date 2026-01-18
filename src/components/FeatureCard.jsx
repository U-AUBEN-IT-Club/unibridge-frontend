import React from 'react';

/**
 * CARTE DE FONCTIONNALITÉ (FeatureCard.jsx)
 * 
 * Un composant "réutilisable" qui affiche une icône, un titre et une description.
 * Il reçoit ces informations via les "Props" (propriétés).
 */
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
      {/* Affichage de l'icône passée en prop */}
      <div className="mb-4 p-3 bg-blue-50 rounded-full">
        {icon}
      </div>

      {/* Titre de la fonctionnalité */}
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>

      {/* Description texte */}
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;