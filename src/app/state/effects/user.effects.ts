import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { saveTokensToLocalStorage } from 'src/app/services/localstorage/notification.service';

import { AppState } from '../app.state';
import { Router } from '@angular/router';
import {
  activateAccountAction,
  activateAccountFailAction,
  activateAccountSuccessAction,
  changeEmailAction,
  changeEmailFail,
  changeEmailSuccess,
  changePasswordAction,
  changePasswordFail,
  changePasswordSuccess,
  deleteAccountAction,
  deleteAccountFailAction,
  deleteAccountSuccessAction,
  desactivateAccountAction,
  desactivateAccountFailAction,
  desactivateAccountSuccessAction,
  loadInfoUserAction,
  loadInfoUserFailAction,
  loadInfoUserSuccessAction,
  updateBirthdateAction,
  updateBirthdateFailAction,
  updateBirthdateSuccessAction,
  updateFirstNameAction,
  updateFirstNameFailAction,
  updateFirstNameSuccessAction,
  updateLastNameAction,
  updateLastNameFailAction,
  updateLastNameSuccessAction,
  updateNicknameAction,
  updateNicknameFailAction,
  updateNicknameSuccessAction,
  updatePhoneNumberAction,
  updatePhoneNumberFailAction,
  updatePhoneNumberSuccessAction,
  updatePhotoAction,
  updatePhotoFailAction,
  updatePhotoSuccessAction,
} from '../actions/user.actions';
import { UserService } from 'src/app/services/api/user.service';
import { startNotificationAction } from '../actions/notification.actions';

@Injectable()
export class UserEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,

    private userService: UserService,
    private router: Router
  ) {}

  loadUserDetailEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('LOAD_INFO_USER'),
      mergeMap(() =>
        this.userService.fetchGetUserDetail().pipe(
          map((response: any) => {
            if (response.isSuccess) {
              return loadInfoUserSuccessAction({
                data: response?.data,
                errors: {},
              });
            } else {
              return loadInfoUserFailAction({
                errors: response?.data,
              });
            }
          }),
          catchError((error) => {
            this.store.dispatch(
              loadInfoUserFailAction({
                errors: error?.error,
              })
            );

            return EMPTY;
          })
        )
      )
    )
  );

  updateNickname$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateNicknameAction),
      mergeMap(({ nickname }: any) =>
        this.userService.fetchUpdateNickname(nickname).pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Nickname updated successfully',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );
              this.store.dispatch(loadInfoUserAction());
              return updateNicknameSuccessAction({});
            } else {
              return updateNicknameFailAction({
                errors: response?.error || 'An error occurred',
              });
            }
          }),
          catchError((error) =>
            of(
              updateNicknameFailAction({
                errors: error?.error || 'An error occurred',
              })
            )
          )
        )
      )
    )
  );

  updatePhotoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePhotoAction),
      mergeMap(({ filePhoto }: any) =>
        this.userService.fetchUpdatePhoto(filePhoto).pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Photo updated successfully',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );
              this.store.dispatch(loadInfoUserAction());
              return updatePhotoSuccessAction({});
            } else {
              return updatePhotoFailAction({
                errors: response?.error || 'An error occurred',
              });
            }
          }),
          catchError((error) =>
            of(
              updatePhotoFailAction({
                errors: error?.error || 'An error occurred',
              })
            )
          )
        )
      )
    )
  );

  updateBirthdayEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBirthdateAction),
      mergeMap(({ birthday }: any) =>
        this.userService.fetchUpdateBirthdate(birthday).pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              this.store.dispatch(
                startNotificationAction({
                  message: ' Date birthday updated successfully',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );
              this.store.dispatch(loadInfoUserAction());
              return updateBirthdateSuccessAction({});
            } else {
              return updateBirthdateFailAction({
                errors: response?.error || 'An error occurred',
              });
            }
          }),
          catchError((error) =>
            of(
              updateBirthdateFailAction({
                errors: error?.error || 'An error occurred',
              })
            )
          )
        )
      )
    )
  );

  updateFirstName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateFirstNameAction),
      mergeMap(({ firstname }: any) =>
        this.userService.fetchUpdateFirstName(firstname).pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Firstname updated successfully',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );
              this.store.dispatch(loadInfoUserAction());
              return updateFirstNameSuccessAction({});
            } else {
              return updateFirstNameFailAction({
                errors: response?.error || 'An error occurred',
              });
            }
          }),
          catchError((error) =>
            of(
              updateFirstNameFailAction({
                errors: error?.error || 'An error occurred',
              })
            )
          )
        )
      )
    )
  );

  updateLastName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateLastNameAction),
      mergeMap(({ lastname }: any) =>
        this.userService.fetchUpdateLastName(lastname).pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Lastname updated successfully',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );
              this.store.dispatch(loadInfoUserAction());
              return updateLastNameSuccessAction({});
            } else {
              return updateLastNameFailAction({
                errors: response?.error || 'An error occurred',
              });
            }
          }),
          catchError((error) =>
            of(
              updateLastNameFailAction({
                errors: error?.error || 'An error occurred',
              })
            )
          )
        )
      )
    )
  );
  updatePhoneNumber = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePhoneNumberAction),
      mergeMap(({ phonenumber }: any) =>
        this.userService.fetchUpdatePhoneNumber(phonenumber).pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Phone Number updated successfully',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );
              this.store.dispatch(loadInfoUserAction());
              return updatePhoneNumberSuccessAction({});
            } else {
              return updatePhoneNumberFailAction({
                errors: response?.error || 'An error occurred',
              });
            }
          }),
          catchError((error) =>
            of(
              updatePhoneNumberFailAction({
                errors: error?.error || 'An error occurred',
              })
            )
          )
        )
      )
    )
  );

  desactivateAccountEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(desactivateAccountAction),
      mergeMap(() =>
        this.userService.fetchDesactivateAccount().pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Account is desactivate successfully',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );

              return desactivateAccountSuccessAction({});
            } else {
              return desactivateAccountFailAction({
                errors: response?.error || 'An error occurred',
              });
            }
          }),
          catchError((error) =>
            of(
              desactivateAccountFailAction({
                errors: error?.error || 'An error occurred',
              })
            )
          )
        )
      )
    )
  );
  deleteAccountEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAccountAction),
      mergeMap(() =>
        this.userService.fetchDeleteAccount().pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Account is delete successfully',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );

              return deleteAccountSuccessAction({});
            } else {
              return deleteAccountFailAction({
                errors: response?.error || 'An error occurred',
              });
            }
          }),
          catchError((error) =>
            of(
              deleteAccountFailAction({
                errors: error?.error || 'An error occurred',
              })
            )
          )
        )
      )
    )
  );
  activateAccountEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activateAccountAction),
      mergeMap(({ email }: any) =>
        this.userService.fetchActivateAccount(email).pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Account is activate successfully',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );

              return activateAccountSuccessAction({});
            } else {
              return activateAccountFailAction({
                errors: response?.error || 'An error occurred',
              });
            }
          }),
          catchError((error) =>
            of(
              activateAccountFailAction({
                errors: error?.error || 'An error occurred',
              })
            )
          )
        )
      )
    )
  );

  changePasswordEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changePasswordAction),
      mergeMap(({ new_password, re_new_password, current_password }: any) =>
        this.userService
          .fetchChangePassword(new_password, re_new_password, current_password)
          .pipe(
            map((response: any) => {
              console.log(response);
              if (response.isSuccess) {
                this.store.dispatch(
                  startNotificationAction({
                    message: 'Password change successfully',
                    label: 'SUCCESS',
                    status: 'success',
                  })
                );

                return changePasswordSuccess({});
              } else {
                this.store.dispatch(
                  startNotificationAction({
                    message: 'Se encontraron errores',
                    label: 'FAIL',
                    status: 'error',
                  })
                );
                return changePasswordFail({
                  errors: response?.error || 'An error occurred',
                });
              }
            }),
            catchError((error) =>
              of(
                changePasswordFail({
                  errors: error?.error || 'An error occurred',
                })
              )
            )
          )
      )
    )
  );

  changeEmailEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeEmailAction),
      mergeMap(({ current_password, new_email, re_new_email }: any) =>
        this.userService
          .fetchChangeEmail(current_password, new_email, re_new_email)
          .pipe(
            map((response: any) => {
              console.log(response);
              if (response.isSuccess) {
                this.store.dispatch(
                  startNotificationAction({
                    message: 'Email change successfully',
                    label: 'SUCCESS',
                    status: 'success',
                  })
                );
                this.store.dispatch(loadInfoUserAction());

                return changeEmailSuccess({});
              } else {
                return changeEmailFail({
                  errors: response?.error || 'An error occurred',
                });
              }
            }),
            catchError((error) => {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Ocurrio un error',
                  label: 'ERROR',
                  status: 'error',
                })
              );
              return of(
                changeEmailFail({
                  errors: error?.error || 'An error occurred',
                })
              );
            })
          )
      )
    )
  );
}
