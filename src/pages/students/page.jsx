import React, { useState } from 'react';
import StudentList from '@/components/student/StudentList';
import StudentForm from '@/components/student/StudentForm';
import { PlusCircle, GraduationCap } from 'lucide-react';

/**
 * PAGE GESTION ÉTUDIANTS (Students/page.jsx)
 * 
 * Cette page orchestre tout ce qui concerne les étudiants.
 * Elle décide s'il faut afficher la liste ou le formulaire,
 * et gère le passage entre les deux.
 */
const StudentPage = () => {
    // ÉTATS DE LA PAGE
    const [isAdding, setIsAdding] = useState(false);        // Pour savoir si on affiche le formulaire
    const [editingStudent, setEditingStudent] = useState(null); // Stocke l'étudiant qu'on est en train de modifier

    // Fonction pour lancer la modification d'un étudiant
    const handleEdit = (student) => {
        setEditingStudent(student); // On se souvient de quel étudiant on parle
        setIsAdding(true);          // On affiche le formulaire
    };

    // Fonction pour fermer le formulaire et revenir à la liste
    const handleCloseForm = () => {
        setIsAdding(false);
        setEditingStudent(null);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* EN-TÊTE DE LA PAGE */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                        <GraduationCap className="text-blue-600" size={32} />
                        Gestion des Étudiants
                    </h1>
                    <p className="text-slate-500 mt-1">
                        Consultez, ajoutez ou modifiez les informations des membres.
                    </p>
                </div>

                {/* Bouton pour ajouter un nouvel étudiant (visible seulement quand le formulaire n'est pas déjà ouvert) */}
                {!isAdding && (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-100 font-semibold"
                    >
                        <PlusCircle size={20} />
                        Ajouter un étudiant
                    </button>
                )}
            </div>

            {/* CONTENU PRINCIPAL */}
            <div className="grid grid-cols-1 gap-8">
                {isAdding ? (
                    // On affiche le FORMULAIRE si isAdding est vrai
                    <div className="max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-top-4 duration-300">
                        <StudentForm
                            studentToEdit={editingStudent}
                            onCancel={handleCloseForm}
                        />
                    </div>
                ) : (
                    // Sinon on affiche la LISTE
                    <div className="animate-in fade-in duration-500">
                        <StudentList onEdit={handleEdit} />
                    </div>
                )}
            </div>

            {/* NOTE PÉDAGOGIQUE EN BAS DE PAGE */}
            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                <p className="text-slate-600 text-sm">
                    🚀 <strong>Note tech</strong> : Cette page interagit avec une API Django REST.
                    Les données sont gérées globalement par Zustand (voir `src/store/`).
                </p>
            </div>
        </div>
    );
};

export default StudentPage;
