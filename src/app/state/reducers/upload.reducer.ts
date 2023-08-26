import { createReducer, on } from '@ngrx/store';

import { UploadState } from 'src/app/models/upload.state';
import {
  uploadCsvAction,
  uploadCsvActionFail,
  uploadCsvActionSuccess,
  uploadLoadRegistros,
  uploadLoadRegistrosFail,
  uploadLoadRegistrosSuccess,
} from '../actions/uploadcsv.actions';

export const initialState: UploadState = {
  infoUpload: {},
  errors: {},
  isLoading: false,
  data: {},
  isLoadingLoadRegistros: false,
};

export const uploadReducer = createReducer(
  initialState,
  on(uploadCsvAction, (state, payload) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(uploadCsvActionSuccess, (state, payload) => {
    return {
      ...state,
      ...payload,
      isLoading: false,
    };
  }),
  on(uploadCsvActionFail, (state, payload) => {
    return {
      ...state,
      ...payload,
      isLoading: false,
    };
  }),

  on(uploadLoadRegistros, (state, payload) => {
    return {
      ...state,
      ...payload,
      isLoadingLoadRegistros: true,
    };
  }),
  on(uploadLoadRegistrosSuccess, (state, payload) => {
    return {
      ...state,
      ...payload,
      isLoadingLoadRegistros: false,
    };
  }),
  on(uploadLoadRegistrosFail, (state, payload) => {
    return {
      ...state,
      ...payload,
      isLoadingLoadRegistros: false,
    };
  })
);
