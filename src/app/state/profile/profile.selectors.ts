import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './profile.state';

export const selectProfile = createFeatureSelector<ProfileState>('profile');

export const selectPoints = createSelector(selectProfile, (state) => state.points);

export const selectLevel = createSelector(selectPoints, (points) => {return `Barrieren-Entdecker (${points})`});
