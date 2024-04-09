import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { UploadService } from 'src/app/services/api/upload.service';
import { startNotificationAction } from '../actions/notification.actions';
import {
  emptyModelRecordsFail,
  emptyModelRecordsSuccess,
  loadAllModels,
  loadAllModelsFail,
  loadAllModelsSuccess,
  uploadCsvActionFail,
  uploadCsvActionSuccess,
  uploadLoadRegistros,
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
              if (response.isSuccess) {
                let jsonData = response.data;

                jsonData.time = parseFloat(jsonData.time.toFixed(4));

                let htmlString = '<div>';
                htmlString += `<p><strong>Mensaje:</strong> ${jsonData.message}</p>`;
                htmlString += `<p><strong>Total de datos en CSV original:</strong> ${jsonData.total_data_csv_original}</p>`;
                htmlString += `<p><strong>Total de datos en CSV de partida:</strong> ${
                  jsonData.total_data_csv_partida !== null
                    ? jsonData.total_data_csv_partida
                    : 'No disponible'
                }</p>`;
                htmlString += `<p><strong>Total después de procesamiento:</strong> ${jsonData.total_despues_procesamiento}</p>`;
                htmlString += `<p><strong>Total de objetos creados:</strong> ${jsonData.total_objetos_creados}</p>`;
                htmlString += `<p><strong>Total de datos guardados en la base de datos:</strong> ${jsonData.total_datos_guardados_database}</p>`;
                htmlString += `<p><strong>Tiempo de procesamiento:</strong> ${jsonData.time} segundos</p>`;
                htmlString += '</div>';

                this.store.dispatch(
                  startNotificationAction({
                    message: htmlString,
                    label: 'SUCCESS',
                    status: 'success',
                  })
                );

                this.store.dispatch(
                  uploadLoadRegistros({
                    nameModel,
                  })
                );
                this.store.dispatch(loadAllModels());

                return uploadCsvActionSuccess({
                  infoUpload: response?.data,
                });
              } else {
                this.store.dispatch(
                  startNotificationAction({
                    message: 'Error',
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
              let jsonData = error.error;

              let htmlString = '<div>';
              htmlString += `<p><strong>Tipo de error:</strong> ${jsonData?.error_type}</p>`;
              htmlString += `<p><strong>Mensaje de error:</strong> ${jsonData?.message}</p>`;

              if (jsonData?.details) {
                htmlString += '<p><strong>Detalles</strong></p>';
                htmlString += '<ul>';
                htmlString +=
                  jsonData?.details?.missing_columns &&
                  `<li><strong>Columnas faltantes:</strong> ${jsonData.details.missing_columns.join(
                    ', '
                  )}</li>`;
                htmlString +=
                  jsonData?.details?.new_columns &&
                  `<li><strong>Nuevas columnas o mal escritas:</strong> ${jsonData.details.new_columns.join(
                    ', '
                  )}</li>`;
                htmlString += '</ul>';
                htmlString +=
                  jsonData?.expected_columns &&
                  `<p><strong>Columnas esperadas:</strong> ${jsonData.expected_columns.join(
                    ', '
                  )}</p>`;
                htmlString +=
                  jsonData?.time &&
                  `<p><strong>Tiempo de procesamiento:</strong> ${parseFloat(
                    jsonData.time.toFixed(4)
                  )} segundos</p>`;
                htmlString += '</div>';
              }

              this.store.dispatch(
                startNotificationAction({
                  message: htmlString,
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

  loadAllModeleffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('LOAD_ALL_MODELS'),
      mergeMap(() =>
        this.uploadService.fetchGetModels().pipe(
          map((response: any) => {
            if (response.isSuccess) {
              return loadAllModelsSuccess({
                dataModels: response?.data,
              });
            } else {
              return loadAllModelsFail({
                errors: response?.errors,
              });
            }
          }),
          catchError((error) => {
            this.store.dispatch(
              loadAllModelsFail({
                errors: error?.error,
              })
            );
            return EMPTY;
          })
        )
      )
    )
  );

  emptyModelRecordsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('EMPTY_MODEL_RECORDS_ACTION'),
      mergeMap(({ nameModel }) =>
        this.uploadService.fetchEmptyModelRecords(nameModel).pipe(
          map((response: any) => {
            if (response.isSuccess) {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Success',
                  label: 'Registros eliminados correctamente',
                  status: 'success',
                })
              );
              this.store.dispatch(loadAllModels());
              return emptyModelRecordsSuccess();
            } else {
              this.store.dispatch(
                startNotificationAction({
                  message: 'Error',
                  label: 'FAIL',
                  status: 'error',
                })
              );
              return emptyModelRecordsFail({
                errors: response?.errors,
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
              emptyModelRecordsFail({
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
