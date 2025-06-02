import { createReducer, on } from '@ngrx/store';
import { submitAnswer } from './introduction-quiz.actions';

export const initialState = 0;

export const introductionQuizReducer = createReducer(
  initialState,
  on(submitAnswer, (state: number) => state)
);
