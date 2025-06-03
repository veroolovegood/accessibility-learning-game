import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IntroductionState } from './introduction.state';
import { CompletedStateEnum } from '../completed-state.enum';

export const selectIntroduction = createFeatureSelector<IntroductionState>('introduction');

export const selectIntroductionChapterCompleted = createSelector(selectIntroduction,
  (state: IntroductionState) => {
    return state.lessonOne == CompletedStateEnum.COMPLETED &&
      state.quizLessonOne == CompletedStateEnum.COMPLETED &&
      state.simulation == CompletedStateEnum.COMPLETED &&
      state.finalQuiz == CompletedStateEnum.COMPLETED
  });

export const selectLessonOneCompleted = createSelector(selectIntroduction,
  (state: IntroductionState) => state.lessonOne == CompletedStateEnum.COMPLETED && state.quizLessonOne == CompletedStateEnum.COMPLETED)
