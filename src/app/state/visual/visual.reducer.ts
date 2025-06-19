import { CompletedStateEnum } from '../completed-state.enum';
import { createReducer, on } from '@ngrx/store';
import { completeLesson, startLesson } from './visual.actions';

export const initialState = {
  introduction: CompletedStateEnum.COMPLETED,
  fontSize: CompletedStateEnum.COMPLETED,
  contrast: CompletedStateEnum.COMPLETED,
  finalQuiz: CompletedStateEnum.UNFINISHED
}

export const visualReducer = createReducer(initialState,
  on(startLesson, ((state, {lessonKey}) => ({...state, [lessonKey]: CompletedStateEnum.STARTED}))),
  on(completeLesson, ((state, {lessonKey}) => ({...state, [lessonKey]: CompletedStateEnum.COMPLETED}))));
