import { createAction, props } from '@ngrx/store';
import { AuthState, LoginType, RegisterType } from 'src/app/models/auth.model';
export enum ActionTypes {
  LOGIN_IN_ACTION = 'LOGIN_IN_ACTION',
  LOGIN_IN_SUCCESS = 'LOGIN_IN_SUCCESS',
  LOGIN_IN_FAIL = 'LOGIN_IN_FAIL',
  REGISTER_IN_ACTION = 'REGISTER_IN_ACTION',
  REGISTER_IN_SUCCESS = 'REGISTER_IN_SUCCESS',
  REGISTER_IN_FAIL = 'REGISTER_IN_FAIL',
  CHECK_TOKEN_ACTION = 'CHECK_TOKEN_ACTION',
  CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS',
  CHECK_TOKEN_FAIL = 'CHECK_TOKEN_FAIL',
  CLEAR_TOKENS_ACTION = 'CLEAR_TOKENS_ACTION',
}

export const loginInAction = createAction(
  ActionTypes.LOGIN_IN_ACTION,
  props<LoginType>()
);

export const loginInActionSuccess = createAction(
  ActionTypes.LOGIN_IN_SUCCESS,
  props<AuthState>()
);

export const loginInActionFail = createAction(
  ActionTypes.LOGIN_IN_FAIL,
  props<AuthState>()
);

export const registerInAction = createAction(
  ActionTypes.REGISTER_IN_ACTION,
  props<RegisterType>()
);

export const registerInActionFail = createAction(
  ActionTypes.REGISTER_IN_FAIL,
  props<AuthState>()
);

export const registerInActionSuccess = createAction(
  ActionTypes.REGISTER_IN_SUCCESS
);

export const checkTokenAction = createAction(ActionTypes.CHECK_TOKEN_ACTION);
export const checkTokenActionFail = createAction(ActionTypes.CHECK_TOKEN_FAIL);

export const checkTokenActionSuccess = createAction(
  ActionTypes.CHECK_TOKEN_SUCCESS
);

export const clearTokensAction = createAction(ActionTypes.CLEAR_TOKENS_ACTION);

export const authActivateEmailAction = createAction(
  'AUTH_ACTIVATE_EMAIL_ACTION',
  props<{ uid: string; token: string }>()
);
export const authActivateEmailSuccess = createAction(
  'AUTH_ACTIVATE_EMAIL_SUCCESS'
);
export const authActivateEmailFail = createAction('AUTH_ACTIVATE_EMAIL_FAIL');

//
export const resetPasswordAction = createAction(
  'RESET_PASSWORD_ACTION',
  props<{
    email: string;
  }>()
);
export const resetPasswordSuccess = createAction(
  'RESET_PASSWORD_SUCCESS',
  props<AuthState>()
);
export const resetPasswordFail = createAction(
  'RESET_PASSWORD_FAIL',
  props<AuthState>()
);
//
export const resetConfirmationPasswordAction = createAction(
  'RESET_CONFIRMATION_PASSWORD_ACTION',
  props<{
    uid: string;
    token: string;
    new_password: string;
    re_new_password: string;
  }>()
);
export const resetConfirmationPasswordSuccess = createAction(
  'RESET_CONFIRMATION_PASSWORD_SUCCESS',
  props<AuthState>()
);
export const resetConfirmationPasswordFail = createAction(
  'RESET_CONFIRMATION_PASSWORD_FAIL',
  props<AuthState>()
);
