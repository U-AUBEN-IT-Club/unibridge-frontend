import React, { useEffect } from 'react';
import useUniversityStore from '@/store/universityStore';
import { Trash2, Edit, School, MapPin, Calendar } from 'lucide-react';

/**
 * LISTE DES UNIVERSITÉS (UniversityList.jsx)
 * 
 * Affiche toutes les institutions partenaires sous forme de cartes.
 * Permet de visualiser rapidement l'abréviation et la localisation.
 */
const UniversityList = ({ onEdit }) => {
    const { universities, loading, error, fetchUniversities, deleteUniversity } = useUniversityStore();

    // On charge les données au démarrage
    useEffect(() => {
        fetchUniversities();
    }, [fetchUniversities]);

    if (loading) return <div className="text-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div></div>;
    if (error) return <div className="text-center p-4 text-red-500 bg-red-50 rounded-xl">Erreur: {error}</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Si aucune université n'existe encore */}
            {universities.length === 0 ? (
                <div className="col-span-full p-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-300">
                    Aucune université enregistrée pour le moment.
                </div>
            ) : (
                // Affichage de chaque université
                universities.map((uni) => (
                    <div key={uni.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                                <School size={24} />
                            </div>
                            {/* Boutons (cachés par défaut, apparaissent au survol) */}
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => onEdit(uni)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                    title="Modifier"
                                >
                                    <Edit size={18} />
                                </button>
                                <button
                                    onClick={() => {
                                        if (window.confirm(`Supprimer l'université ${uni.name} ?`)) {
                                            deleteUniversity(uni.id);
                                        }
                                    }}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                    title="Supprimer"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Informations de l'université */}
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{uni.name}</h3>
                        <div className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md mb-4">
                            {uni.abbreviation}
                        </div>

                        <div className="space-y-2 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-slate-400" />
                                <span>{uni.location || 'Localisation non définie'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                <Calendar size={14} />
                                <span>Partenaire depuis le {new Date(uni.joined_at).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default UniversityList;
