import { create } from "zustand";
import { Item } from "../types/item.type";

type CrudStore = {
  items: Item[];
  addItem: (name: string) => void;
  updateItem: (id: string, name: string) => void;
  deleteItem: (id: string) => void;
};

export const useCrudStore = create<CrudStore>((set) => ({
  items: [],

  addItem: (name) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          id: crypto.randomUUID(),
          name,
          createdAt: new Date().toISOString(),
        },
      ],
    })),

  updateItem: (id, name) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, name } : item
      ),
    })),

  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));