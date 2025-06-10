import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroductionLesson1 } from './introduction/introduction-lesson-one/introduction-lesson-one.component';
import { LessonOneQuizComponent } from './introduction/lesson-one-quiz/lesson-one-quiz.component';
import { SimulationMenuComponent } from './introduction/simulation/simulation-menu/simulation-menu.component';
import {
  BarrierSimulationComponent
} from './introduction/simulation/barrier-simulation/barrier-simulation.component';
import { canActivateAuthRole } from './auth/auth-guard';
import { QuizComponent } from './common/quiz/quiz.component';
import { MenuTemplateComponent } from './menu/menu-template/menu-template.component';
import { IntroductionComponent } from './visual/introduction/introduction.component';
import { FontSizeComponent } from './visual/font-size/font-size.component';
import { ContrastComponent } from './visual/contrast/contrast.component';

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
    path: 'introduction/lesson-one',
    component: IntroductionLesson1,
    canActivate: [canActivateAuthRole]
  },
  {
    path: 'introduction/lesson-one/quiz',
    component: LessonOneQuizComponent,
    canActivate: [canActivateAuthRole]
  },
  {
    path: 'introduction/simulation',
    component: SimulationMenuComponent,
    canActivate: [canActivateAuthRole]
  },
  {
    path: 'introduction/simulation/:barrierType',
    component: BarrierSimulationComponent,
    canActivate: [canActivateAuthRole]
  },
  {
    path: 'quiz/:quizId',
    component: QuizComponent,
    canActivate: [canActivateAuthRole]
  },
  {
    path: 'menu/:id',
    component: MenuTemplateComponent,
    canActivate: [canActivateAuthRole]
  },
  {
    path: 'visual/introduction',
    component: IntroductionComponent,
    canActivate: [canActivateAuthRole]
  },
  {
    path: 'visual/fontsize',
    component: FontSizeComponent,
    canActivate: [canActivateAuthRole]
  },
  {
    path: 'visual/contrast',
    component: ContrastComponent,
    canActivate: [canActivateAuthRole]
  }
];
