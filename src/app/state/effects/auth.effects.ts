import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/api/auth.service';
import {
  saveActivationActivePagePageLocalStorage,
  saveResetPasswordPageLocalStorage,
  saveTokensToLocalStorage,
} from 'src/app/services/localstorage/notification.service';
import {
  authActivateEmailFail,
  authActivateEmailSuccess,
  checkTokenActionFail,
  checkTokenActionSuccess,
  clearTokensAction,
  loginInActionFail,
  loginInActionSuccess,
  registerInActionFail,
  registerInActionSuccess,
  resetConfirmationPasswordAction,
  resetConfirmationPasswordFail,
  resetConfirmationPasswordSuccess,
  resetPasswordAction,
  resetPasswordFail,
  resetPasswordSuccess,
} from '../actions/auth.actions';
import { startNotificationAction } from '../actions/notification.actions';
import { AppState } from '../app.state';
import { Router } from '@angular/router';
import { URL_BASE_FRONT } from 'src/app/services/api/entpoints';

@Injectable()
export class AuthEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  loginIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType('LOGIN_IN_ACTION'),
      mergeMap(({ email, password }) =>
        this.authService.fetchCreateToken({ email, password }).pipe(
          map((response: any) => {
            if (response.isSuccess) {
              saveTokensToLocalStorage({
                accessToken: response.data?.access,
                refreshToken: response.data?.refresh,
              });
              this.store.dispatch(
                startNotificationAction({
                  message: 'Test',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );

              return loginInActionSuccess({
                refreshToken: response.data?.refresh,
                accessToken: response.data?.access,
                isAuthenticated: true,
              });
            } else {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Test',
                  label: 'FAIL',
                  status: 'error',
                })
              );

              return loginInActionFail({
                refreshToken: '',
                accessToken: '',
                isAuthenticated: false,
                errors: response?.error?.detail?.error,
              });
            }
          }),
          catchError((error) => {
            this.store.dispatch(
              loginInActionFail({
                refreshToken: '',
                accessToken: '',
                isAuthenticated: false,
                errors: error?.error,
              })
            );
            return EMPTY;
          })
        )
      )
    )
  );

  registerIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType('REGISTER_IN_ACTION'),
      mergeMap((payload) =>
        this.authService.fetchRegisterUser(payload).pipe(
          map((response: any) => {
            if (response.isSuccess) {
              saveActivationActivePagePageLocalStorage(true);
              this.store.dispatch(
                startNotificationAction({
                  message:
                    'Revisa tu  <a href="https://mail.google.com/mail/u/0/#inbox" taget="_blank"> correo </a> para activar la cuenta.',
                  label: 'Usuario Creado exitosamente.',
                  status: 'success',
                })
              );

              return registerInActionSuccess();
            } else {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Hay errores',
                  label: 'Se encontraron errores',
                  status: 'error',
                })
              );
              return registerInActionFail({});
            }
          }),
          catchError((error) => {
            this.store.dispatch(
              registerInActionFail({
                errors: error?.error,
              })
            );
            return EMPTY;
          })
        )
      )
    )
  );

  authActivate$ = createEffect(() =>
    this.actions$.pipe(
      ofType('AUTH_ACTIVATE_EMAIL_ACTION'),
      mergeMap(({ uid, token }) =>
        this.authService.fetchAuthActivationAccount(uid, token).pipe(
          map((response: any) => {
            if (response.isSuccess) {
              saveActivationActivePagePageLocalStorage(false);
              let count = 5;
              const notificationInterval = setInterval(() => {
                if (count > 0) {
                  this.store.dispatch(
                    startNotificationAction({
                      message: `Cuenta activada correctamente.Redirigiendo .Redirigiendo ...en ${count} segundos`,
                      label: 'SUCCESS',
                      status: 'success',
                    })
                  );
                  count--;
                } else {
                  clearInterval(notificationInterval);

                  window.location.href = URL_BASE_FRONT;
                }
              }, 1000);
              return authActivateEmailSuccess();
            } else {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Fallo al activar la cuenta.',
                  label: 'FAIL',
                  status: 'error',
                })
              );

              return authActivateEmailFail();
            }
          }),
          catchError((error) => {
            this.store.dispatch(
              startNotificationAction({
                message: 'Fallo al activar la cuenta.',
                label: 'FAIL',
                status: 'error',
              })
            );
            this.store.dispatch(authActivateEmailFail());
            return EMPTY;
          })
        )
      )
    )
  );

  checkAuthenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType('CHECK_TOKEN_ACTION'),
      mergeMap(() =>
        this.authService.fetchCheckAuthenticated().pipe(
          map((response: any) => {
            if (response.isSuccess) {
              return checkTokenActionSuccess();
            } else {
              return checkTokenActionFail();
            }
          }),
          catchError((error) => {
            this.store.dispatch(checkTokenActionFail());
            return EMPTY;
          })
        )
      )
    )
  );

  resetPasswordEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetPasswordAction),
      mergeMap(({ email }: any) =>
        this.authService.fetchResetPassword(email).pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              saveResetPasswordPageLocalStorage(true);
              this.store.dispatch(
                startNotificationAction({
                  message:
                    'Email is send for reset password, please check your imbox.',
                  label: 'SUCCESS',
                  status: 'success',
                })
              );

              return resetPasswordSuccess({});
            } else {
              return resetPasswordFail({
                errors: response?.error || 'An error occurred',
              });
            }
          }),

          catchError((error) => {
            this.store.dispatch(
              startNotificationAction({
                message: 'Se encontraron errores',
                label: 'FAIL',
                status: 'error',
              })
            );
            resetPasswordFail({
              errors: error?.error || 'An error occurred',
            });
            return EMPTY;
          })
        )
      )
    )
  );
  resetConfirmationPasswordEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetConfirmationPasswordAction),
      mergeMap(({ uid, token, new_password, re_new_password }: any) =>
        this.authService
          .fetchConfirmationResetPassword(
            uid,
            token,
            new_password,
            re_new_password
          )
          .pipe(
            map((response: any) => {
              console.log(response);
              if (response.isSuccess) {
                saveResetPasswordPageLocalStorage(false);

                let count = 5;
                const notificationInterval = setInterval(() => {
                  if (count > 0) {
                    this.store.dispatch(
                      startNotificationAction({
                        message: `Password is reset successfully..Redirigiendo .Redirigiendo ...en ${count} segundos`,
                        label: 'SUCCESS',
                        status: 'success',
                      })
                    );

                    count--;
                  } else {
                    clearInterval(notificationInterval);

                    window.location.href = URL_BASE_FRONT;
                  }
                }, 1000);

                return resetConfirmationPasswordSuccess({});
              } else {
                return resetConfirmationPasswordFail({
                  errors: response?.error || 'An error occurred',
                });
              }
            }),

            catchError((error) => {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Fallo al restablecer la contraseña',
                  label: 'FAIL',
                  status: 'error',
                })
              );
              resetConfirmationPasswordFail({
                errors: error?.error || 'An error occurred',
              });
              return EMPTY;
            })
          )
      )
    )
  );
}
