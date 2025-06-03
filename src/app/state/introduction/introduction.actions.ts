import { createAction, props } from '@ngrx/store';
import { IntroductionState } from './introduction.state';

export const startLesson = createAction('[Introduction] Start', props<{lessonKey: keyof IntroductionState}>());
export const completeLesson = createAction('[Introduction] Complete', props<{lessonKey: keyof IntroductionState}>());

