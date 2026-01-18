import React, { useEffect } from 'react';
import useStudentStore from '@/store/studentStore';
import { Trash2, Edit, User, School, BookOpen } from 'lucide-react';

/**
 * LISTE DES ÉTUDIANTS (StudentList.jsx)
 * 
 * Ce composant affiche tous les étudiants sous forme de tableau.
 * Il récupère les données depuis le "studentStore" et permet de
 * supprimer ou de lancer la modification d'un étudiant.
 */
const StudentList = ({ onEdit }) => {
    // On récupère les données et les fonctions du store
    const { students, loading, error, fetchStudents, deleteStudent } = useStudentStore();

    // useEffect : S'exécute une seule fois au chargement du composant
    // pour aller chercher la liste des étudiants sur le serveur.
    useEffect(() => {
        fetchStudents();
    }, [fetchStudents]);

    // Affichage pendant le chargement
    if (loading) return <div className="text-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div></div>;

    // Affichage en cas d'erreur
    if (error) return <div className="text-center p-4 text-red-500 bg-red-50 rounded-xl">Erreur: {error}</div>;

    // Fonction utilitaire pour afficher le nom complet de la filière
    const getFiliereLabel = (val) => {
        const filieres = {
            'GL': 'Génie Logiciel',
            'RIT': 'Réseaux et Informatique de Gestion',
            'MIAGE': 'Méthodes Informatiques Appliquées à la Gestion',
            'OTHER': 'Autre'
        };
        return filieres[val] || val;
    };

    return (
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-4 font-semibold text-slate-700">Étudiant</th>
                        <th className="p-4 font-semibold text-slate-700">Université</th>
                        <th className="p-4 font-semibold text-slate-700 text-center">Niveau</th>
                        <th className="p-4 font-semibold text-slate-700">Filière</th>
                        <th className="p-4 font-semibold text-slate-700 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Si la liste est vide */}
                    {students.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="p-12 text-center text-slate-400 italic">
                                Aucun étudiant trouvé dans la base.
                            </td>
                        </tr>
                    ) : (
                        // On parcourt la liste des étudiants pour créer chaque ligne du tableau
                        students.map((student) => (
                            <tr key={student.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                {/* Colonne Identité */}
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                            {student.first_name[0]}{student.last_name[0]}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">{student.first_name} {student.last_name}</div>
                                            <div className="text-xs text-slate-500">{student.email}</div>
                                        </div>
                                    </div>
                                </td>

                                {/* Colonne Université */}
                                <td className="p-4">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <School size={16} className="text-slate-400" />
                                        <span>{student.university_name || student.university}</span>
                                    </div>
                                </td>

                                {/* Colonne Niveau */}
                                <td className="p-4 text-center">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold text-sm">
                                        L{student.level}
                                    </span>
                                </td>

                                {/* Colonne Filière */}
                                <td className="p-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 flex items-center w-fit gap-1">
                                        <BookOpen size={12} />
                                        {getFiliereLabel(student.filiere)}
                                    </span>
                                </td>

                                {/* Colonne Actions (Éditer / Supprimer) */}
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-1">
                                        <button
                                            onClick={() => onEdit(student)}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            title="Modifier"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (window.confirm('Voulez-vous vraiment supprimer cet étudiant ?')) {
                                                    deleteStudent(student.id);
                                                }
                                            }}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Supprimer"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
