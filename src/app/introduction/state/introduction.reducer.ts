import { createReducer, on } from '@ngrx/store';
import { completedStep } from './introduction.actions';

export const initialState = '';

export const introductionReducer = createReducer(
  initialState,
  on(completedStep, (state: string) => state)
);
