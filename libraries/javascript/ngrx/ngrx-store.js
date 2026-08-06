// libraries/javascript/ngrx/ngrx-store.js
import { createAction, createReducer, on, props } from '@ngrx/store';

// 1. Actions
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const setCustomValue = createAction('[Counter] Set Custom Value', props<{ value: number }>());

// 2. Initial State
export const initialState = {
  count: 0
};

// 3. Reducer
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, () => initialState),
  on(setCustomValue, (state, { value }) => ({ ...state, count: value }))
);
