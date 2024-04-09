import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/models/auth.model';
import {
  clearTokensLocalstorage,
  getTokensFromLocalStorage,
} from 'src/app/services/localstorage/notification.service';
import {
  checkTokenAction,
  checkTokenActionFail,
  checkTokenActionSuccess,
  clearTokensAction,
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
    isLoadingCheckAuthenticate: false,
    isLoadingRegister: false,
  },
};

export const authReducer = createReducer(
  initialState,
  on(loginInAction, (state, payload) => ({
    ...state,
    loadings: {
      ...state.loadings,
      isLoadingLogin: true,
    },
  })),
  on(loginInActionSuccess, (state, payload) => ({
    ...state,
    ...payload,
    loadings: {
      ...state.loadings,
      isLoadingLogin: false,
    },
  })),
  on(loginInActionFail, (state, payload) => ({
    ...state,
    ...payload,
    loadings: {
      ...state.loadings,
      isLoadingLogin: false,
    },
  })),
  on(registerInAction, (state, payload) => ({
    ...state,
    loadings: {
      ...state.loadings,
      isLoadingRegister: true,
    },
  })),
  on(registerInActionSuccess, (state, payload) => ({
    ...state,
    ...payload,
    loadings: {
      ...state.loadings,
      isLoadingRegister: false,
    },
  })),
  on(registerInActionFail, (state, payload) => ({
    ...state,
    ...payload,
    loadings: {
      ...state.loadings,
      isLoadingRegister: false,
    },
  })),
  on(checkTokenAction, (state, payload) => ({
    ...state,
    ...payload,
    loadings: {
      ...state.loadings,
      isLoadingCheckAuthenticate: true,
    },
  })),
  on(checkTokenActionFail, (state, payload) => ({
    ...state,
    ...payload,
    isAuthenticated: false,
    loadings: {
      ...state.loadings,
      isLoadingCheckAuthenticate: false,
    },
  })),
  on(checkTokenActionSuccess, (state, payload) => ({
    ...state,
    ...payload,
    isAuthenticated: true,
    loadings: {
      ...state.loadings,
      isLoadingCheckAuthenticate: false,
    },
  })),
  on(clearTokensAction, (state, payload) => {
    clearTokensLocalstorage();
    return {
      ...state,
      ...payload,
      accessToken: '',
      refreshToken: '',
      isAuthenticated: false,
    };
  })
);
