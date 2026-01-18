import React, { useState, useEffect } from 'react';
import useUniversityStore from '@/store/universityStore';
import { Save, X, Building, FileText, MapPin, Tag } from 'lucide-react';

/**
 * FORMULAIRE UNIVERSITÉ (UniversityForm.jsx)
 * 
 * Permet d'enregistrer un nouvel établissement ou d'en modifier un existant.
 */
const UniversityForm = ({ uniToEdit, onCancel }) => {
    const { addUniversity, updateUniversity, loading } = useUniversityStore();

    // État du formulaire
    const [formData, setFormData] = useState({
        name: '',
        abbreviation: '',
        location: '',
    });

    // Remplissage automatique si on modifie
    useEffect(() => {
        if (uniToEdit) {
            setFormData({
                name: uniToEdit.name || '',
                abbreviation: uniToEdit.abbreviation || '',
                location: uniToEdit.location || '',
            });
        }
    }, [uniToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (uniToEdit) {
                await updateUniversity(uniToEdit.id, formData);
            } else {
                await addUniversity(formData);
            }
            onCancel();
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
                <Building size={24} className="text-blue-600" />
                <h2 className="text-xl font-bold">
                    {uniToEdit ? 'Modifier l\'université' : 'Nouvelle université'}
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nom Complet */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <FileText size={14} /> Nom complet
                    </label>
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        placeholder="Ex: Université de Sciences et Techniques"
                    />
                </div>

                {/* Abréviation (ex: USTB) */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <Tag size={14} /> Abréviation
                    </label>
                    <input
                        required
                        type="text"
                        name="abbreviation"
                        value={formData.abbreviation}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        placeholder="Ex: USTB"
                    />
                </div>

                {/* Localisation / Ville */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <MapPin size={14} /> Localisation
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        placeholder="Ex: Ouagadougou, Burkina Faso"
                    />
                </div>

                <div className="flex justify-end gap-3 pt-6">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-2"
                    >
                        <X size={18} /> Annuler
                    </button>
                    <button
                        disabled={loading}
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-100 flex items-center gap-2 font-bold disabled:opacity-50"
                    >
                        <Save size={18} />
                        {loading ? 'Traitement...' : uniToEdit ? 'Mettre à jour' : 'Ajouter'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UniversityForm;
