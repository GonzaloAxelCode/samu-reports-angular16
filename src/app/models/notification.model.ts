export interface NotificationState {
  message?: string;
  status?: 'warning' | 'error' | 'success' | 'info' | any;
  show?: boolean;
  label?: string;
}
