import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompletedStateEnum } from '../completed-state.enum';
import { VisualState } from './visual.state';

export const selectVisual = createFeatureSelector<VisualState>('visual');


export const selectVisualIntroductionCompleted = createSelector(selectVisual,
  (state: VisualState) => state.introduction == CompletedStateEnum.COMPLETED)
