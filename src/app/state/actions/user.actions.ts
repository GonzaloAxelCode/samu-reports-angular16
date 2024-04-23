import { createAction, props } from '@ngrx/store';
import { UserState } from 'src/app/models/user.model';

export const loadInfoUserAction = createAction('LOAD_INFO_USER');
export const loadInfoUserSuccessAction = createAction(
  'LOAD_INFO_USER_SUCCESS',
  props<UserState>()
);
export const loadInfoUserFailAction = createAction(
  'LOAD_INFO_USER_FAIL',
  props<UserState>()
);

export const updateNicknameAction = createAction(
  'UPDATE_NICKNAME_ACTION',
  props<{ nickname: string }>()
);
export const updateNicknameSuccessAction = createAction(
  'UPDATE_NICKNAME_ACTION_SUCCESS',
  props<UserState>()
);

export const updateNicknameFailAction = createAction(
  'UPDATE_NICKNAME_ACTION_FAIL',
  props<UserState>()
);

// Acciones para actualizar el primer nombre
export const updateFirstNameAction = createAction(
  'UPDATE_FIRST_NAME_ACTION',
  props<{ firstname: string }>()
);

export const updateFirstNameSuccessAction = createAction(
  'UPDATE_FIRST_NAME_ACTION_SUCCESS',
  props<UserState>()
);

export const updateFirstNameFailAction = createAction(
  'UPDATE_FIRST_NAME_ACTION_FAIL',
  props<UserState>()
);

// Acciones para actualizar el apellido
export const updateLastNameAction = createAction(
  'UPDATE_LAST_NAME_ACTION',
  props<{ lastname: string }>()
);

export const updateLastNameSuccessAction = createAction(
  'UPDATE_LAST_NAME_ACTION_SUCCESS',
  props<UserState>()
);

export const updateLastNameFailAction = createAction(
  'UPDATE_LAST_NAME_ACTION_FAIL',
  props<UserState>()
);

// Acciones para actualizar la foto
export const updatePhotoAction = createAction(
  'UPDATE_PHOTO_ACTION',
  props<{ filePhoto: File }>()
);

export const updatePhotoSuccessAction = createAction(
  'UPDATE_PHOTO_ACTION_SUCCESS',
  props<UserState>()
);

export const updatePhotoFailAction = createAction(
  'UPDATE_PHOTO_ACTION_FAIL',
  props<UserState>()
);

// Acciones para actualizar la ubicación
export const updateLocationAction = createAction(
  'UPDATE_LOCATION_ACTION',
  props<UserState>()
);

export const updateLocationSuccessAction = createAction(
  'UPDATE_LOCATION_ACTION_SUCCESS',
  props<UserState>()
);

export const updateLocationFailAction = createAction(
  'UPDATE_LOCATION_ACTION_FAIL',
  props<UserState>()
);

// Acciones para actualizar la fecha de nacimiento
export const updateBirthdateAction = createAction(
  'UPDATE_BIRTHDATE_ACTION',
  props<{ birthday: string }>()
);

export const updateBirthdateSuccessAction = createAction(
  'UPDATE_BIRTHDATE_ACTION_SUCCESS',
  props<UserState>()
);

export const updateBirthdateFailAction = createAction(
  'UPDATE_BIRTHDATE_ACTION_FAIL',
  props<UserState>()
);

// Acciones para actualizar el número de teléfono
export const updatePhoneNumberAction = createAction(
  'UPDATE_PHONE_NUMBER_ACTION',
  props<{ phonenumber: any }>()
);

export const updatePhoneNumberSuccessAction = createAction(
  'UPDATE_PHONE_NUMBER_ACTION_SUCCESS',
  props<UserState>()
);

export const updatePhoneNumberFailAction = createAction(
  'UPDATE_PHONE_NUMBER_ACTION_FAIL',
  props<UserState>()
);

export const desactivateAccountAction = createAction(
  'DESACTIVATE_ACCOUNT_ACTION'
);
export const desactivateAccountSuccessAction = createAction(
  'DESACTIVATE_ACCOUNT_ACTION_SUCCESS',
  props<UserState>()
);
export const desactivateAccountFailAction = createAction(
  'DESACTIVATE_ACCOUNT_ACTION_FAIL',
  props<UserState>()
);
export const deleteAccountAction = createAction('DELETE_ACCOUNT_ACTION');
export const deleteAccountSuccessAction = createAction(
  'DELETE_ACCOUNT_ACTION_SUCCESS',
  props<UserState>()
);
export const deleteAccountFailAction = createAction(
  'DELETE_ACCOUNT_ACTION_FAIL',
  props<UserState>()
);

export const activateAccountAction = createAction(
  'ACTIVATE_ACCOUNT_ACTION',
  props<{ email: string }>()
);
export const activateAccountSuccessAction = createAction(
  'ACTIVATE_ACCOUNT_ACTION_SUCCESS',
  props<UserState>()
);
export const activateAccountFailAction = createAction(
  'ACTIVATE_ACCOUNT_ACTION_FAIL',
  props<UserState>()
);

//
export const changeEmailAction = createAction(
  'CHANGE_EMAIL_ACTION',
  props<{
    current_password: string;
    new_email: string;
    re_new_email: string;
  }>()
);
export const changeEmailSuccess = createAction(
  'CHANGE_EMAIL_SUCCESS',
  props<UserState>()
);
export const changeEmailFail = createAction(
  'CHANGE_EMAIL_FAIL',
  props<UserState>()
);
//
export const changePasswordAction = createAction(
  'CHANGE_PASSWORD_ACTION',
  props<{
    new_password: string;
    re_new_password: string;
    current_password: string;
  }>()
);
export const changePasswordSuccess = createAction(
  'CHANGE_PASSWORD_SUCCESS',
  props<UserState>()
);
export const changePasswordFail = createAction(
  'CHANGE_PASSWORD_FAIL',
  props<UserState>()
);
