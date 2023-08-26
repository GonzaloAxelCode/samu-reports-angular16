import { createAction, props } from '@ngrx/store';
import { UploadCsvData, UploadState } from 'src/app/models/upload.state';

export const uploadCsvAction = createAction(
  'UPLOADCSV_ACTION',
  props<UploadCsvData>()
);

export const uploadCsvActionSuccess = createAction(
  'UPLOADCSV_SUCCESS',
  props<UploadState>()
);

export const uploadCsvActionFail = createAction(
  'UPLOADCSV_FAIL',
  props<UploadState>()
);

export const uploadLoadRegistros = createAction(
  'LOAD_REGISTROS_ACTION',
  props<{ nameModel: string }>()
);

export const uploadLoadRegistrosSuccess = createAction(
  'LOAD_REGISTROS_SUCCESS',
  props<UploadState>()
);

export const uploadLoadRegistrosFail = createAction(
  'LOAD_REGISTROS_FAIL',
  props<UploadState>()
);
