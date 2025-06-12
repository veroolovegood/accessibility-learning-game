import { createReducer, on } from '@ngrx/store';
import { rewardPoints } from './profile.actions';

export const initialState = {
  points: 0
}

export const profileReducer = createReducer(initialState,
  on(rewardPoints, (state, {points}) => ({...state, points: state.points + points}))
)
