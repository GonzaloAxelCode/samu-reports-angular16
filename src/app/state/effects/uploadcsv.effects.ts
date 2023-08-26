import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { UploadService } from 'src/app/services/api/upload.service';
import { startNotificationAction } from '../actions/notification.actions';
import {
    uploadCsvActionFail,
    uploadCsvActionSuccess,
    uploadLoadRegistrosFail,
    uploadLoadRegistrosSuccess,
} from '../actions/uploadcsv.actions';
import { AppState } from '../app.state';

@Injectable()
export class UploadEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private uploadService: UploadService
  ) {}

  uploadcsveffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('UPLOADCSV_ACTION'),
      mergeMap(({ file, nameModel, encode, delimiter }) =>
        this.uploadService
          .fetchUploadCsvData({ file, nameModel, encode, delimiter })
          .pipe(
            map((response: any) => {
              console.log(response);
              if (response.isSuccess) {
                this.store.dispatch(
                  startNotificationAction({
                    message: 'Test',
                    label: 'SUCCESS',
                    status: 'success',
                  })
                );

                return uploadCsvActionSuccess({
                  infoUpload: response?.data,
                });
              } else {
                this.store.dispatch(
                  startNotificationAction({
                    message: 'Test',
                    label: 'FAIL',
                    status: 'error',
                  })
                );

                return uploadCsvActionFail({
                  errors: response?.errors,
                  infoUpload: response?.data,
                });
              }
            }),
            catchError((error) => {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Test',
                  label: 'FAIL',
                  status: 'error',
                })
              );
              this.store.dispatch(
                uploadCsvActionFail({
                  errors: error?.error,
                })
              );
              return EMPTY;
            })
          )
      )
    )
  );

  loadregistroseffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('LOAD_REGISTROS_ACTION'),
      mergeMap(({ nameModel }) =>
        this.uploadService.fetchGetRegistros(nameModel).pipe(
          map((response: any) => {
            console.log(response);
            if (response.isSuccess) {
              return uploadLoadRegistrosSuccess({
                registros: response?.data,
              });
            } else {
              return uploadLoadRegistrosFail({
                errors: response?.errors,
              });
            }
          }),
          catchError((error) => {
            console.log(error);
            this.store.dispatch(
              uploadCsvActionFail({
                errors: error?.error,
              })
            );
            return EMPTY;
          })
        )
      )
    )
  );
}
