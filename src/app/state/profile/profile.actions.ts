import { createAction, props } from '@ngrx/store';

export const rewardPoints = createAction('[Profile] Reward Points', props<{points: number}>());
