import { create } from "zustand";

type User = {
  email: string;
};

type AuthStore = {
  loadUserFromStorage: any;
  user: User | null;
  token: string | null;
  login: (data: { email: string; token: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,

  login: ({ email, token }) => {
    localStorage.setItem("token", token);

    set({
      user: { email },
      token,
    });
  },

  logout: () => {
    localStorage.removeItem("token");

    set({
      user: null,
      token: null,
    });
  },
  loadUserFromStorage: () => {
    const token = localStorage.getItem("token");

    if (token) {
      set({
        token,
        user: { email: "mock@email.com" },
      });
    }
  },
  
}));