import { create } from "zustand";

interface GlobalState {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  lang: "ar",
  setLang: (lang: "ar" | "en") => set({ lang }),
}));
