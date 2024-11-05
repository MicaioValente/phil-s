import { useToast } from '@dls/stores/useToast';
import type { ToastData } from '@dls/stores/useToast/interfaces';

export function showToast({ duration = 4000, ...rest }: ToastData) {
  useToast.getState().showToast({ duration, ...rest });
}
