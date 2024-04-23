import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import { UserState } from 'src/app/models/user.model';
export const selectUserState = (state: AppState) => state.User;

export const selectUserData = createSelector(
  selectUserState,
  (state: UserState) => state
);
export const selectDataUser = createSelector(
  selectUserState,
  (state: UserState) => state.data
);
export const selectErrorsChangeEmail = createSelector(
  selectUserState,
  (state: UserState) => state.errors
);
