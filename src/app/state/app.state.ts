import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from '../models/auth.model';
import { NotificationState } from '../models/notification.model';
import { ReportsState } from '../models/reports.model';
import { UploadState } from '../models/upload.state';
import { UserState } from '../models/user.model';
import { authReducer } from './reducers/auth.reducer';
import { notificationReducer } from './reducers/notification.reducer';
import { reportsReducer } from './reducers/reports.reducer';
import { uploadReducer } from './reducers/upload.reducer';
import { userReducer } from './reducers/user.reducer';

export interface AppState {
  Auth: AuthState;
  User: UserState;
  Notification: NotificationState;
  Upload: UploadState;
  Reports: ReportsState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  Auth: authReducer,
  User: userReducer,
  Notification: notificationReducer,
  Upload: uploadReducer,
  Reports: reportsReducer,
};
