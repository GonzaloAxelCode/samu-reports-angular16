import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/api/auth.service';
import { saveTokensToLocalStorage } from 'src/app/services/localstorage/notification.service';
import {
  loginInActionFail,
  loginInActionSuccess,
  registerInActionSuccess,
} from '../actions/auth.actions';
import { startNotificationAction } from '../actions/notification.actions';
import { AppState } from '../app.state';

@Injectable()
export class AuthEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private authService: AuthService
  ) {}

  loginIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType('LOGIN_IN_ACTION'),
      mergeMap(({ email, password }) =>
        this.authService.fetchCreateToken({ email, password }).pipe(
          map((response: any) => {
            console.log(response);
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
                errors: {
                  detail: response.error,
                },
              });
            }
          }),
          catchError((error) => {
            console.log(error);
            this.store.dispatch(
              startNotificationAction({
                message: 'Test',
                label: 'ERROR CRITICO',
                status: 'error',
              })
            );

            this.store.dispatch(
              loginInActionFail({
                refreshToken: '',
                accessToken: '',
                isAuthenticated: false,
                errors: {
                  detail: error,
                },
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
            console.log(response);
            if (response.isSuccess) {
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
              return loginInActionFail({});
            }
          }),
          catchError((error) => {
            console.log(error);
            this.store.dispatch(
              startNotificationAction({
                message: 'Algo ocurrio',
                label: 'Fallo Servidor',
                status: 'error',
              })
            );

            this.store.dispatch(loginInActionFail({}));
            return EMPTY;
          })
        )
      )
    )
  );
}
