import { create } from "zustand";

type UIState = {
  sidebarOpen: boolean;
};

type UIActions = {
  toggleSidebar: () => void;
  setSidebar: (open: boolean) => void;
};

export const useUIStore = create<UIState & UIActions>((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebar: (open) => set({ sidebarOpen: open }),
}));