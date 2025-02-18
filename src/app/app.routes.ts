import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroductionLesson1 } from './introduction/introduction-lesson-1/introduction-lesson1.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'introduction',
    pathMatch: 'full',
    redirectTo: 'introduction/lesson1'
  },
  {
    path: 'introduction/lesson1',
    component: IntroductionLesson1

  }
];
