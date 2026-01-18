import React, { useState, useEffect } from 'react';
import useStudentStore from '@/store/studentStore';
import useUniversityStore from '@/store/universityStore';
import { Save, X, UserPlus, FileText, Mail, BookOpen, School, Hash } from 'lucide-react';

/**
 * FORMULAIRE ÉTUDIANT (StudentForm.jsx)
 * 
 * Ce composant gère la création et la modification d'un étudiant.
 * Il utilise un "état local" (useState) pour suivre ce que l'utilisateur tape.
 */

// Liste des filières disponibles
const FILIERES = [
    { value: 'GL', label: 'Génie Logiciel' },
    { value: 'RIT', label: 'Réseaux et Informatique de Gestion' },
    { value: 'MIAGE', label: 'Méthodes Informatiques Appliquées à la Gestion' },
    { value: 'OTHER', label: 'Autre' },
];

const StudentForm = ({ studentToEdit, onCancel }) => {
    // Accès aux stores (données globales)
    const { addStudent, updateStudent, loading: studentLoading } = useStudentStore();
    const { universities, fetchUniversities, loading: uniLoading } = useUniversityStore();

    // État local du formulaire
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        university: '',
        filiere: 'GL',
        level: 1,
    });

    // On charge les universités pour pouvoir les choisir dans le menu déroulant
    useEffect(() => {
        fetchUniversities();
    }, [fetchUniversities]);

    // Si on est en mode "Modification", on remplit le formulaire avec les infos de l'étudiant
    useEffect(() => {
        if (studentToEdit) {
            setFormData({
                first_name: studentToEdit.first_name || '',
                last_name: studentToEdit.last_name || '',
                email: studentToEdit.email || '',
                university: studentToEdit.university || '',
                filiere: studentToEdit.filiere || 'GL',
                level: studentToEdit.level || 1,
            });
        }
    }, [studentToEdit]);

    // Fonction appelée à chaque fois qu'on tape dans un champ
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'level' ? parseInt(value) || 1 : value
        }));
    };

    // Fonction appelée lors de la validation du formulaire (soumission)
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche la page de se recharger
        try {
            if (studentToEdit) {
                // Modification
                await updateStudent(studentToEdit.id, formData);
            } else {
                // Création
                await addStudent(formData);
            }
            onCancel(); // Ferme le formulaire après réussite
        } catch (error) {
            console.error('Erreur de soumission:', error);
        }
    };

    const isSubmitting = studentLoading || uniLoading;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            {/* Titre dynamique */}
            <div className="flex items-center gap-2 mb-6 text-slate-800">
                <UserPlus size={24} className="text-blue-600" />
                <h2 className="text-xl font-bold">
                    {studentToEdit ? 'Modifier l\'étudiant' : 'Ajouter un étudiant'}
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Champs Prénom et Nom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <FileText size={14} /> Prénom
                        </label>
                        <input
                            required
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            placeholder="Ex: Jean"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <FileText size={14} /> Nom
                        </label>
                        <input
                            required
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            placeholder="Ex: Dupont"
                        />
                    </div>
                </div>

                {/* Champ Email */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <Mail size={14} /> Email
                    </label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        placeholder="jean.dupont@example.com"
                    />
                </div>

                {/* Sélection de l'Université */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <School size={14} /> Université
                    </label>
                    <select
                        required
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    >
                        <option value="">Sélectionnez une université</option>
                        {universities.map((uni) => (
                            <option key={uni.id} value={uni.id}>{uni.name}</option>
                        ))}
                    </select>
                </div>

                {/* Filière et Niveau */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <BookOpen size={14} /> Filière
                        </label>
                        <select
                            name="filiere"
                            value={formData.filiere}
                            onChange={handleChange}
                            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        >
                            {FILIERES.map((f) => (
                                <option key={f.value} value={f.value}>{f.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Hash size={14} /> Niveau (Année)
                        </label>
                        <input
                            required
                            type="number"
                            min="1"
                            max="5"
                            name="level"
                            value={formData.level}
                            onChange={handleChange}
                            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex justify-end gap-3 pt-4">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <X size={18} /> Annuler
                    </button>
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium disabled:opacity-50"
                    >
                        <Save size={18} />
                        {isSubmitting ? 'Enregistrement...' : studentToEdit ? 'Mettre à jour' : 'Enregistrer'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;
