import { Component, OnInit } from '@angular/core';
import { LessonStatusOfUser } from './model/lesson.model';
import { ActivatedRoute, Router } from '@angular/router';
import { menuData } from './data/menu.data';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matLock } from '@ng-icons/material-icons/baseline';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectIntroductionChapterCompleted,
  selectLessonOneCompleted
} from '../../state/introduction/introduction.selectors';
import { withLatestFrom } from 'rxjs';

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
        this.store.select(selectLessonOneCompleted),
        this.store.select(selectIntroductionChapterCompleted)),
    ).subscribe(([params, lessonOneCompleted, introductionCompleted]) => {
      const id = params.get('id');
      if (id) {
        if (id == 'introduction') {
          this.lessons = menuData[id].lessons.map(lesson => {
            return {
              ...lesson,
              completed: lesson.id == 'introduction' ? lessonOneCompleted : lesson.unlockedByDefault
            }
          });
        } else if (id == 'main') {
          this.lessons = menuData[id].lessons.map(lesson => {
            return {
              ...lesson,
              completed: lesson.id == 'introduction' ? introductionCompleted : lesson.unlockedByDefault
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
      console.log(this.lessons);
    });
  }

  unlockedByCompleted(lesson: LessonStatusOfUser): boolean {
    console.log(`called with lesson: ${lesson.id}`)
    return lesson.unlockedByDefault || lesson.unlockedWhenCompletedLesson.every(lessonId => {
      const completedLesson = this.lessons.find(l => l.id == lessonId)?.completed
      console.log(`Found completed lesson ${lessonId}: ${completedLesson}`);
      return completedLesson;
    });
  }

  routeToLesson(route: string) {
    this.router.navigate([route]);
  }

}
