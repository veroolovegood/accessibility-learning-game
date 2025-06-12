import { Component, OnInit } from '@angular/core';
import { LessonStatusOfUser } from './model/lesson.model';
import { ActivatedRoute, Router } from '@angular/router';
import { menuData } from './data/menu.data';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matLock } from '@ng-icons/material-icons/baseline';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectIntroduction,
  selectIntroductionChapterCompleted,
  selectLessonOneCompleted
} from '../../state/introduction/introduction.selectors';
import { withLatestFrom } from 'rxjs';
import { selectVisual } from '../../state/visual/visual.selectors';
import { IntroductionState } from '../../state/introduction/introduction.state';
import { VisualState } from '../../state/visual/visual.state';

@Component({
  selector: 'app-menu-template',
  imports: [
    NgIcon,
    NgClass
  ],
  templateUrl: './menu-template.component.html',
  styleUrl: './menu-template.component.scss',
  viewProviders: [provideIcons({matLock})]
})
export class MenuTemplateComponent implements OnInit {
  title: string = "Kapitelübersicht";
  lessons: LessonStatusOfUser[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private store: Store) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      withLatestFrom(
        this.store.select(selectIntroduction),
        this.store.select(selectVisual)
        ),
    ).subscribe(([params, introduction, visual]) => {
      const id = params.get('id');
      if (id) {
        if (id == 'introduction') {
          this.lessons = menuData[id].lessons.map(lesson => {
            const completed = lesson.id == 'lessonOne' ? introduction.lessonOne == 2 && introduction.quizLessonOne == 2 : introduction[lesson.id as keyof IntroductionState] == 2;
            return {
              ...lesson,
              completed: completed
            }
          });
        } else if (id == 'main') {
          const introductionCompleted = introduction.lessonOne == 2 &&
            introduction.quizLessonOne == 2 &&
            introduction.simulation == 2 &&
            introduction.finalQuiz == 2;
          const visualCompleted = visual.introduction == 2 &&
            visual.fontSize == 2 &&
            visual.contrast == 2;
          this.lessons = menuData[id].lessons.map(lesson => {
            let completed;
            switch (lesson.id) {
              case 'introduction': completed = introductionCompleted; break;
              case 'visual': completed = visualCompleted; break;
              default: completed = false;
            }
            return {
              ...lesson,
              completed: completed
            }
          });
        } else if (id == 'visual'){
          this.lessons = menuData[id].lessons.map(lesson => {
            const completed = visual[lesson.id as keyof VisualState] == 2;
            return {
              ...lesson,
              completed: completed
            }
          });
        } else {
          this.lessons = menuData[id].lessons.map(lesson => {
            return {
              ...lesson,
              completed: false
            }
          });
        }
        this.title = menuData[id].title;
      }
    });
  }

  unlockedByCompleted(lesson: LessonStatusOfUser): boolean {
    return lesson.unlockedByDefault || lesson.unlockedWhenCompletedLesson.every(lessonId => {
      return  this.lessons.find(l => l.id == lessonId)?.completed
    });
  }

  routeToLesson(route: string) {
    this.router.navigate([route]);
  }

}
