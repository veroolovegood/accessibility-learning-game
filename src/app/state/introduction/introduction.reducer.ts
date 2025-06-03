import { CompletedStateEnum } from '../completed-state.enum';
import { createReducer, on } from '@ngrx/store';
import { completeLesson, startLesson } from './introduction.actions';

export const initialState = {
  lessonOne: CompletedStateEnum.COMPLETED,
  quizLessonOne: CompletedStateEnum.COMPLETED,
  simulation: CompletedStateEnum.COMPLETED,
  finalQuiz: CompletedStateEnum.COMPLETED,
}

export const introductionReducer = createReducer(initialState,
  on(startLesson, ((state, {lessonKey}) => {
    console.log(`started lesson ${lessonKey}`)
    return {...state, [lessonKey]: CompletedStateEnum.STARTED}
  })),
  on(completeLesson, ((state, {lessonKey}) => ({...state, [lessonKey]: CompletedStateEnum.COMPLETED}))));
