import { createAction, createReducer, on } from '@ngrx/store';

import { UserState } from 'src/app/models/user.model';

export const initialState: UserState = {};

export const userReducer = createReducer(
  initialState,
  on(createAction(''), (state) => {
    return {
      ...state,
    };
  })
);

