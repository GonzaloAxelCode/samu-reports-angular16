import { createSelector } from '@ngrx/store';

import { AuthState } from 'src/app/models/auth.model';
import { AppState } from '../app.state';
export const selectAuthState = (state: AppState) => state.Auth;

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

export const selectLoadingLogin = createSelector(
  selectAuthState,
  (state: AuthState) => state.loadings?.isLoadingLogin
);

export const selectLoadingRegister = createSelector(
  selectAuthState,
  (state: AuthState) => state.loadings?.isLoadingRegister
);

export const selectErrorsAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state.errors
);

export const selectAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);

export const selectCheckAuthenticateLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state.loadings?.isLoadingCheckAuthenticate
);
