import { createAction, props } from '@ngrx/store';
import { NotificationState } from 'src/app/models/notification.model';

export const startNotificationAction = createAction(
  'START_NOTIFICATION',
  props<NotificationState>()
);
export const stopNotificationAction = createAction(
  'STOP_NOTIFICATION',
  props<NotificationState>()
);
