import { createSelector } from '@ngrx/store';

import { NotificationState } from 'src/app/models/notification.model';
import { AppState } from '../app.state';
export const selectNotificationState = (state: AppState) => state.Notification;

export const selectNotification = createSelector(
  selectNotificationState,
  (state: NotificationState) => state
);
