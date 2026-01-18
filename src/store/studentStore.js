import { create } from 'zustand';
import api from '@/api/axios';

/**
 * GESTIONNAIRE DES ÉTUDIANTS (studentStore.js)
 * 
 * Utilise "Zustand" pour gérer les données des étudiants de manière globale.
 * C'est comme un "cerveau" qui stocke les informations et les méthodes 
 * pour interagir avec la base de données.
 */
const useStudentStore = create((set, get) => ({
    // ÉTAT (Données stockées)
    students: [],    // Liste des étudiants
    loading: false,     // Vrai si une opération est en cours
    error: null,        // Message d'erreur s'il y a un problème

    // ACTIONS (Méthodes pour modifier l'état ou appeler l'API)

    // 1. RÉCUPÉRER tous les étudiants depuis Django
    fetchStudents: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get('students/');
            set({ students: response.data, loading: false });
        } catch (error) {
            set({ error: "Impossible de récupérer les étudiants", loading: false });
        }
    },

    // 2. AJOUTER un nouvel étudiant
    addStudent: async (studentData) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post('students/', studentData);
            // On ajoute le nouvel étudiant à la liste déjà existante
            set((state) => ({
                students: [...state.students, response.data],
                loading: false
            }));
            return response.data;
        } catch (error) {
            set({ error: "Erreur lors de l'ajout", loading: false });
            throw error;
        }
    },

    // 3. MODIFIER les informations d'un étudiant
    updateStudent: async (id, studentData) => {
        set({ loading: true, error: null });
        try {
            const response = await api.put(`students/${id}/`, studentData);
            // On cherche l'étudiant dans la liste et on met à jour ses données
            set((state) => ({
                students: state.students.map((student) =>
                    student.id === id ? response.data : student
                ),
                loading: false
            }));
            return response.data;
        } catch (error) {
            set({ error: "Erreur lors de la modification", loading: false });
            throw error;
        }
    },

    // 4. SUPPRIMER un étudiant
    deleteStudent: async (id) => {
        set({ loading: true, error: null });
        try {
            await api.delete(`students/${id}/`);
            // On retire l'étudiant de la liste locale
            set((state) => ({
                students: state.students.filter((student) => student.id !== id),
                loading: false
            }));
        } catch (error) {
            set({ error: "Erreur lors de la suppression", loading: false });
            throw error;
        }
    }
}));

export default useStudentStore;
