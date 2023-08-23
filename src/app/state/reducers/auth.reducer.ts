import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/models/auth.model';
import { getTokensFromLocalStorage } from 'src/app/services/localstorage/notification.service';
import {
  loginInAction,
  loginInActionFail,
  loginInActionSuccess,
  registerInAction,
  registerInActionFail,
  registerInActionSuccess,
} from '../actions/auth.actions';
const { refreshToken, accessToken } = getTokensFromLocalStorage();

export const initialState: AuthState = {
  errors: {},
  isAuthenticated: false,
  accessToken: accessToken || '',
  refreshToken: refreshToken || '',
  loadings: {
    isLoadingLogin: false,
    isLoadingVerifyToken: false,
  },
};

export const authReducer = createReducer(
  initialState,
  on(loginInAction, (state, payload) => ({
    ...state,
    loadings: {
      isLoadingLogin: true,
    },
  })),
  on(loginInActionSuccess, (state, payload) => ({
    ...state,
    ...payload,
    loadings: {
      isLoadingLogin: false,
    },
  })),
  on(loginInActionFail, (state, payload) => ({
    ...state,
    ...payload,
    loadings: {
      isLoadingLogin: false,
    },
  })),
  on(registerInAction, (state, payload) => ({
    ...state,

    loadings: {
      isLoadingRegister: true,
    },
  })),
  on(registerInActionSuccess, (state, payload) => ({
    ...state,
    ...payload,
    loadings: {
      isLoadingRegister: false,
    },
  })),
  on(registerInActionFail, (state, payload) => ({
    ...state,
    ...payload,
    loadings: {
      isLoadingRegister: false,
    },
  }))
);
