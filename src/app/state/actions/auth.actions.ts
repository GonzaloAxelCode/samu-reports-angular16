import { createAction, props } from '@ngrx/store';
import { AuthState, LoginType, RegisterType } from 'src/app/models/auth.model';

export const loginInAction = createAction(
  'LOGIN_IN_ACTION',
  props<LoginType>()
);

export const loginInActionSuccess = createAction(
  'LOGIN_IN_SUCCESS',
  props<AuthState>()
);

export const loginInActionFail = createAction(
  'LOGIN_IN_FAIL',
  props<AuthState>()
);

export const registerInAction = createAction(
  'REGISTER_IN_ACTION',
  props<RegisterType>()
);
export const registerInActionFail = createAction(
  'REGISTER_IN_FAIL',
  props<AuthState>()
);
export const registerInActionSuccess = createAction(
  'REGISTER_IN_SUCCESS',
  props<AuthState>()
);

export const checkTokenAction = createAction('CHECK_TOKEN_ACTION');
export const checkTokenActionFail = createAction(
  'CHECK_TOKEN_FAIL',
  props<AuthState>()
);
export const checkTokenActionSuccess = createAction(
  'CHECK_TOKEN_SUCCESS',
  props<AuthState>()
);
export const clearTokensAction = createAction(
  'CLEAR_TOKENS_ACTION',
  props<AuthState>()
);
