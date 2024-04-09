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

export const loadAllModels = createAction('LOAD_ALL_MODELS');

export const loadAllModelsSuccess = createAction(
  'LOAD_ALL_MODELS_SUCCESS',
  props<UploadState>()
);

export const loadAllModelsFail = createAction(
  'LOAD_ALL_MODELS_FAIL',
  props<UploadState>()
);

export const emptyModelRecordsAction = createAction(
  'EMPTY_MODEL_RECORDS_ACTION',
  props<UploadState>()
);

export const emptyModelRecordsSuccess = createAction(
  'EMPTY_MODEL_RECORDS_SUCCESS'
);

export const emptyModelRecordsFail = createAction(
  'EMPTY_MODEL_RECORDS_FAIL',
  props<UploadState>()
);
