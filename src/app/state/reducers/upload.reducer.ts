import { createAction, createReducer, on } from '@ngrx/store';

import { UploadState } from 'src/app/models/upload.state';

export const initialState: UploadState = {};

export const uploadReducer = createReducer(
  initialState,
  on(createAction(''), (state) => {
    return {
      ...state,
    };
  })
);
