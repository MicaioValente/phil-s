import { create } from 'zustand';

import type { ToastStore } from '@dls/stores/useToast/interfaces';

export const useToast = create<ToastStore>(set => ({
  data: [],
  showToast: params => set(state => ({ data: [...state.data, params] })),
  hideToast: () => set(state => ({ data: state.data.slice(1) })),
}));

export * from '@dls/stores/useToast/methods';
