import type { ToastData } from '@dls/stores/useToast/interfaces';

export interface ToastProps {
  item: ToastData;
  index: number;
  hideToast(): void;
}
