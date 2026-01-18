import { create } from 'zustand';
import api from '@/api/axios';

/**
 * GESTIONNAIRE DES UNIVERSITÉS (universityStore.js)
 * 
 * Similaire au store des étudiants, ce fichier gère tout ce qui concerne
 * les universités partenaires (Récupération, Ajout, Modification, Suppression).
 */
const useUniversityStore = create((set, get) => ({
    // DONNÉES
    universities: [],
    loading: false,
    error: null,

    // MÉTHODES

    // 1. Lire toutes les universités
    fetchUniversities: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get('universities/');
            set({ universities: response.data, loading: false });
        } catch (error) {
            set({ error: "Erreur de chargement des universités", loading: false });
        }
    },

    // 2. Créer une université
    addUniversity: async (uniData) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post('universities/', uniData);
            set((state) => ({
                universities: [...state.universities, response.data],
                loading: false
            }));
            return response.data;
        } catch (error) {
            set({ error: "Erreur lors de l'ajout", loading: false });
            throw error;
        }
    },

    // 3. Mettre à jour une université
    updateUniversity: async (id, uniData) => {
        set({ loading: true, error: null });
        try {
            const response = await api.put(`universities/${id}/`, uniData);
            set((state) => ({
                universities: state.universities.map((uni) =>
                    uni.id === id ? response.data : uni
                ),
                loading: false
            }));
            return response.data;
        } catch (error) {
            set({ error: "Erreur lors de la modification", loading: false });
            throw error;
        }
    },

    // 4. Supprimer une université
    deleteUniversity: async (id) => {
        set({ loading: true, error: null });
        try {
            await api.delete(`universities/${id}/`);
            set((state) => ({
                universities: state.universities.filter((uni) => uni.id !== id),
                loading: false
            }));
        } catch (error) {
            set({ error: "Erreur lors de la suppression", loading: false });
            throw error;
        }
    }
}));

export default useUniversityStore;
