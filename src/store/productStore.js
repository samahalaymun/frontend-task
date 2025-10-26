import { create } from "zustand";

export const useProductStore = create((set) => ({
  filters: { page: 1, limit: 10 },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
}));