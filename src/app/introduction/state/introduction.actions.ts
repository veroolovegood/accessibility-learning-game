import { createAction, props } from '@ngrx/store';

export const completedStep = createAction('[Introduction] Complete Step', props<{step: string}>);
