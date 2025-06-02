import { createAction, props } from '@ngrx/store';

export const submitAnswer = createAction('[Introduction Quiz] Submit Answer', props<{correctAnswers: number}>);
