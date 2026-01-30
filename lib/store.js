import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useModalStore = create((set) => ({
  isOpen: false,
  movie: null,
  openModal: (movie) => set({ isOpen: true, movie }),
  closeModal: () => set({ isOpen: false, movie: null }),
}));

export const useListStore = create(
  persist(
    (set, get) => ({
      myList: [],
      addToList: (movie) => set((state) => ({ myList: [...state.myList, movie] })),
      removeFromList: (movieId) =>
        set((state) => ({ myList: state.myList.filter((m) => m.id !== movieId) })),
      isInList: (movieId) => get().myList.some((m) => m.id === movieId),
    }),
    {
      name: 'netflix-list-storage',
    }
  )
);
