export interface ToastData {
  title: string;
  message: string;
  duration?: number;
}

export interface ToastStore {
  data: ToastData[];
  showToast: (params: ToastData) => void;
  hideToast: () => void;
}
