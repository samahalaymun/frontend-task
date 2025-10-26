import {
  clearToken,
  clearUser,
  getToken,
  getUser,
  saveToken,
  saveUser,
} from "@/lib/storage";
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

export const useAuthStore = create((set, get) => ({
  user: getUser() || null,
  token: getToken() || null,
  logoutTimer: null,
  setToken: (token) => {
    saveToken(token);
    set({ token });
    get().setupAutoLogout(token);
  },
  setUser: (user) => {
    saveUser(user);
    set({ user });
  },
  logout: () => {
    clearToken();
    clearUser();
    clearTimeout(get().logoutTimer);
    set({ token: null, user: null, logoutTimer: null });
    window.location.href = "/login";
  },
  setupAutoLogout: (token) => {
    try {
      const decoded = jwtDecode(token);     
      const exp = decoded.exp * 1000;
      const now = Date.now();

      if (exp > now) {
        const timeout = exp - now;
        const timer = setTimeout(() => {
          get().logout();
        }, timeout);
        set({ logoutTimer: timer });
      } else {
        get().logout();
      }
    } catch (err) {
      console.error("Error decoding token:", err);
      get().logout();
    }
  },
}));
