import { create } from "zustand";

type AmbientSoundState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useAmbientSound = create<AmbientSoundState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));