import { Component, OnInit } from '@angular/core';
import { LessonStatusOfUser } from './model/lesson.model';
import { ActivatedRoute, Router } from '@angular/router';
import { menuData } from './data/menu.data';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matLock } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-menu-template',
  imports: [
    NgIcon
  ],
  templateUrl: './menu-template.component.html',
  styleUrl: './menu-template.component.scss',
  viewProviders: [provideIcons({matLock})]
})
export class MenuTemplateComponent implements OnInit {
  title: string = "Kapitelübersicht";
  lessons: LessonStatusOfUser[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.pipe().subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.title = menuData[id].title;
        this.lessons = menuData[id].lessons.map(lesson => {
          return {
            ...lesson,
            completed: false
          }
        });
      }
    });
  }

  routeToLesson(route: string){
    this.router.navigate([route]);
  }

}
