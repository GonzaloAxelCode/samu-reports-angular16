import { createAction, createReducer, on } from '@ngrx/store';

import { ReportsState } from 'src/app/models/reports.model';

export const initialState: ReportsState = {};

export const reportsReducer = createReducer(
  initialState,
  on(createAction(''), (state) => {
    return {
      ...state,
    };
  })
);
