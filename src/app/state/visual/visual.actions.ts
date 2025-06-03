import { createAction, props } from '@ngrx/store';
import { VisualState } from './visual.state';

export const startLesson = createAction('[Visual] Start', props<{lessonKey: keyof VisualState}>());
export const completeLesson = createAction('[Visual] Complete', props<{lessonKey: keyof VisualState}>());

