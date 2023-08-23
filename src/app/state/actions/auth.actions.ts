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
export const registerInActionFail = createAction('REGISTER_IN_FAIL');
export const registerInActionSuccess = createAction('REGISTER_IN_SUCCESS');
