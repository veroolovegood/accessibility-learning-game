import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './profile.state';

export const selectProfile = createFeatureSelector<ProfileState>('profile');

export const selectPoints = createSelector(selectProfile, (state) => state.points);

export const selectLevel = createSelector(selectPoints, (points) => {
  return getLevel(points);
});

const getLevel = (points: number) => {
  if(points < 25){
    return '';
  } else if(points >= 25 && points < 50){
    return `Barrierenentdecker:in (${points})`;
  } else if(points >= 50){
    return `Perspektivenwechsler:in (${points})`;
  }
  return '';
}
