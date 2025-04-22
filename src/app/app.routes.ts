import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroductionLesson1 } from './introduction/introduction-lesson-one/introduction-lesson-one.component';
import { LessonOneQuizComponent } from './introduction/lesson-one-quiz/lesson-one-quiz.component';
import { SimulationMenuComponent } from './introduction/simulation/simulation-menu/simulation-menu.component';
import {
  VisualBarrierSimulationComponent
} from './introduction/simulation/visual-barrier-simulation/visual-barrier-simulation.component';

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
    path: 'introduction/lesson-one',
    component: IntroductionLesson1
  },
  {
    path: 'introduction/lesson-one/quiz',
    component: LessonOneQuizComponent
  },
  {
    path: 'introduction/simulation',
    component: SimulationMenuComponent
  }
  ,
  {
    path: 'introduction/simulation/visual-barriers',
    component: VisualBarrierSimulationComponent
  }
];
