import { createReducer, on } from '@ngrx/store';
import { NotificationState } from 'src/app/models/notification.model';
import {
  startNotificationAction,
  stopNotificationAction,
} from '../actions/notification.actions';

export const initialState: NotificationState = {
  message: '',
  status: 'info',
  show: false,
  label: '',
};

export const notificationReducer = createReducer(
  initialState,
  on(startNotificationAction, (state, payload) => {
    return {
      ...state,
      ...payload,
      show: true,
    };
  }),
  on(stopNotificationAction, (state, payload) => {
    return {
      ...state,
      ...payload,
      show: false,
    };
  })
);
