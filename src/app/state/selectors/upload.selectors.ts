import { createSelector } from '@ngrx/store';

import { UploadState } from 'src/app/models/upload.state';
import { AppState } from '../app.state';
export const selectUploadCsvState = (state: AppState) => state.Upload;

export const selectInfoUpload = createSelector(
  selectUploadCsvState,
  (state: UploadState) => state.infoUpload
);

export const selectLoadingUpload = createSelector(
  selectUploadCsvState,
  (state: UploadState) => state.isLoading
);

export const selectRegistros = createSelector(
  selectUploadCsvState,
  (state: UploadState) => state.registros?.results?.slice(0, 100)
);

export const selectAllModels = createSelector(
  selectUploadCsvState,
  (state: UploadState) => state.dataModels
);
export const selectLoadingAllModels = createSelector(
  selectUploadCsvState,
  (state: UploadState) => state.isLoadingLoadDataModels
);

export const selectGetCurrentNameModel = createSelector(
  selectUploadCsvState,
  (state: UploadState) => state.nameModel
);

export const selectLoadingEmptyModelRecords = createSelector(
  selectUploadCsvState,
  (state: UploadState) => state.isLoadingEmptyModelRecords
);
