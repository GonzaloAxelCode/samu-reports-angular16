import { createAction, createReducer, on } from '@ngrx/store';

import { UserState } from 'src/app/models/user.model';
import {
  loadInfoUserAction,
  loadInfoUserFailAction,
  loadInfoUserSuccessAction,
  updateNicknameAction,
  updateNicknameSuccessAction,
  updateNicknameFailAction,
  updateFirstNameAction,
  updateFirstNameSuccessAction,
  updateFirstNameFailAction,
  updateLastNameAction,
  updateLastNameSuccessAction,
  updateLastNameFailAction,
  updatePhotoAction,
  updatePhotoSuccessAction,
  updatePhotoFailAction,
  updateLocationAction,
  updateLocationSuccessAction,
  updateLocationFailAction,
  updateBirthdateAction,
  updateBirthdateSuccessAction,
  updateBirthdateFailAction,
  updatePhoneNumberAction,
  updatePhoneNumberSuccessAction,
  updatePhoneNumberFailAction,
  desactivateAccountAction,
  desactivateAccountSuccessAction,
  desactivateAccountFailAction,
  deleteAccountAction,
  deleteAccountSuccessAction,
  deleteAccountFailAction,
  changeEmailAction,
  changeEmailSuccess,
  changeEmailFail,
  changePasswordAction,
  changePasswordSuccess,
  changePasswordFail,
} from '../actions/user.actions';
import {
  activateAccountAction,
  activateAccountFailAction,
  activateAccountSuccessAction,
} from '../actions/user.actions';

export const initialState: UserState = {
  isLoadingUserDetail: false,
  isLoadingNickname: false,
  isLoadingFirstName: false,
  isLoadingLastName: false,
  isLoadingPhoto: false,
  isLoadingLocation: false,
  isLoadingBirthdate: false,
  isLoadingPhoneNumber: false,
  isLoadingDeleteAccount: false,
  isLoadingDesactivateAccount: false,
  isLoadingActivateAccount: false,
  isLoadingResetPassword: false,
  isLoadingChangeEmail: false,
  isLoadingChangePassword: false,
  isLoadingConfirmationChangePassword: false,
  emailChangedSuccessfully: false,
};

export const userReducer = createReducer(
  initialState,
  on(loadInfoUserAction, (state, payload) => {
    return {
      ...state,
      ...payload,
      isLoadingUserDetail: true,
    };
  }),
  on(loadInfoUserSuccessAction, (state, payload) => {
    return {
      ...state,
      ...payload,
      isLoadingUserDetail: false,
    };
  }),
  on(loadInfoUserFailAction, (state, payload) => {
    return {
      ...state,
      ...payload,
      isLoadingUserDetail: false,
    };
  }),

  on(updateNicknameAction, (state) => ({
    ...state,
    isLoadingNickname: true,
  })),
  on(updateNicknameSuccessAction, (state, payload) => ({
    ...state,
    isLoadingNickname: false,
    ...payload,
  })),
  on(updateNicknameFailAction, (state, payload) => ({
    ...state,
    isLoadingNickname: false,
    ...payload,
  })),
  on(updateFirstNameAction, (state) => ({
    ...state,
    isLoadingFirstName: true,
  })),
  on(updateFirstNameSuccessAction, (state, payload) => ({
    ...state,
    isLoadingFirstName: false,
    ...payload,
  })),
  on(updateFirstNameFailAction, (state, payload) => ({
    ...state,
    isLoadingFirstName: false,
    ...payload,
  })),
  on(updateLastNameAction, (state) => ({
    ...state,
    isLoadingLastName: true,
  })),
  on(updateLastNameSuccessAction, (state, payload) => ({
    ...state,
    isLoadingLastName: false,
    ...payload,
  })),
  on(updateLastNameFailAction, (state, payload) => ({
    ...state,
    isLoadingLastName: false,
    ...payload,
  })),
  on(updatePhotoAction, (state) => ({
    ...state,
    isLoadingPhoto: true,
  })),
  on(updatePhotoSuccessAction, (state, payload) => ({
    ...state,
    isLoadingPhoto: false,
    ...payload,
  })),
  on(updatePhotoFailAction, (state, payload) => ({
    ...state,
    isLoadingPhoto: false,
    ...payload,
  })),
  on(updateLocationAction, (state) => ({
    ...state,
    isLoadingLocation: true,
  })),
  on(updateLocationSuccessAction, (state, payload) => ({
    ...state,
    isLoadingLocation: false,
    ...payload,
  })),
  on(updateLocationFailAction, (state, payload) => ({
    ...state,
    isLoadingLocation: false,
    ...payload,
  })),
  on(updateBirthdateAction, (state) => ({
    ...state,
    isLoadingBirthdate: true,
  })),
  on(updateBirthdateSuccessAction, (state, payload) => ({
    ...state,
    isLoadingBirthdate: false,
    ...payload,
  })),
  on(updateBirthdateFailAction, (state, payload) => ({
    ...state,
    isLoadingBirthdate: false,
    ...payload,
  })),
  on(updatePhoneNumberAction, (state) => ({
    ...state,
    isLoadingPhoneNumber: true,
  })),
  on(updatePhoneNumberSuccessAction, (state, payload) => ({
    ...state,
    isLoadingPhoneNumber: false,
    ...payload,
  })),
  on(updatePhoneNumberFailAction, (state, payload) => ({
    ...state,
    ...payload,
    isLoadingPhoneNumber: false,
  })),
  ///

  on(desactivateAccountAction, (state) => ({
    ...state,
    isLoadingDesactivateAccount: true,
  })),
  on(desactivateAccountSuccessAction, (state, payload) => ({
    ...state,
    ...payload,
    isLoadingDesactivateAccount: false,
  })),
  on(desactivateAccountFailAction, (state, payload) => ({
    ...state,
    ...payload,

    isLoadingDesactivateAccount: false,
  })),

  ///

  on(activateAccountAction, (state) => ({
    ...state,
    isLoadingActivateAccount: true,
  })),
  on(activateAccountSuccessAction, (state, payload) => ({
    ...state,
    ...payload,
    isLoadingActivateAccount: false,
  })),
  on(activateAccountFailAction, (state, payload) => ({
    ...state,
    ...payload,

    isLoadingActivateAccount: false,
  })),

  ///

  on(deleteAccountAction, (state) => ({
    ...state,
    isLoadingDeleteAccount: true,
  })),
  on(deleteAccountSuccessAction, (state, payload) => ({
    ...state,
    ...payload,
    isLoadingDeleteAccount: false,
  })),
  on(deleteAccountFailAction, (state, payload) => ({
    ...state,
    ...payload,

    isLoadingDeleteAccount: false,
  })),
  //

  on(changePasswordAction, (state) => ({
    ...state,
    isLoadingChangePassword: true,
  })),
  on(changePasswordSuccess, (state, payload) => ({
    ...state,
    ...payload,
    isLoadingChangePassword: false,
  })),
  on(changePasswordFail, (state, payload) => ({
    ...state,
    ...payload,

    isLoadingChangePassword: false,
  })),

  //
  on(changeEmailAction, (state) => ({
    ...state,
    isLoadingChangeEmail: true,
  })),
  on(changeEmailSuccess, (state, payload) => ({
    ...state,
    ...payload,
    isLoadingChangeEmail: false,
    emailChangedSuccessfully: true,
  })),
  on(changeEmailFail, (state, payload) => ({
    ...state,
    ...payload,

    isLoadingChangeEmail: false,
    emailChangedSuccessfully: false,
  }))
);
