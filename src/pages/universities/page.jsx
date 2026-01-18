import React, { useState } from 'react';
import UniversityList from '@/components/university/UniversityList';
import UniversityForm from '@/components/university/UniversityForm';
import { PlusCircle, Building2 } from 'lucide-react';

/**
 * PAGE DES UNIVERSITÉS (Universities/page.jsx)
 * 
 * Orchestre la gestion des institutions partenaires.
 * Fonctionne de la même manière que la page des étudiants :
 * elle bascule entre la liste et le formulaire.
 */
const UniversityPage = () => {
    // États pour gérer l'affichage
    const [isAdding, setIsAdding] = useState(false);
    const [editingUni, setEditingUni] = useState(null);

    // Fonction pour ouvrir le mode modification
    const handleEdit = (uni) => {
        setEditingUni(uni);
        setIsAdding(true);
    };

    // Fonction pour fermer le formulaire
    const handleCloseForm = () => {
        setIsAdding(false);
        setEditingUni(null);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* EN-TÊTE ACCROCHEUR */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 flex items-center gap-3">
                        <Building2 className="text-blue-600" size={40} />
                        Universités Partenaires
                    </h1>
                    <p className="text-slate-500 mt-2 text-lg">
                        Gérez les institutions académiques connectées à la plateforme UniBridge.
                    </p>
                </div>

                {/* Bouton d'ajout */}
                {!isAdding && (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all shadow-lg font-bold"
                    >
                        <PlusCircle size={20} />
                        Ajouter une institution
                    </button>
                )}
            </div>

            {/* FORMULAIRE (Si actif) */}
            {isAdding && (
                <div className="max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-top-4 duration-300">
                    <UniversityForm
                        uniToEdit={editingUni}
                        onCancel={handleCloseForm}
                    />
                </div>
            )}

            {/* LISTE DES CARTES D'UNIVERSITÉS */}
            <div className="animate-in fade-in duration-500">
                <UniversityList onEdit={handleEdit} />
            </div>

            {/* NOTE D'AVERTISSEMENT */}
            <div className="mt-16 p-8 bg-blue-50/50 border border-blue-100 rounded-3xl text-center">
                <p className="text-blue-800 font-medium">
                    🏫 <strong>Attention</strong> : Supprimer une université détruira tous les profils étudiants liés (Cascade).
                </p>
                <p className="text-blue-600/70 text-sm mt-1">
                    Système de gestion académique UniBridge - Module Partenariats
                </p>
            </div>
        </div>
    );
};

export default UniversityPage;
