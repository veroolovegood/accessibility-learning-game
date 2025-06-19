import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matInfoOutline } from '@ng-icons/material-icons/outline';
import { matPlayArrow } from '@ng-icons/material-icons/baseline';
import { Store } from '@ngrx/store';
import { completeLesson, startLesson } from '../../../state/introduction/introduction.actions';

@Component({
  selector: 'app-simulation-menu',
  imports: [
    NgIcon
  ],
  viewProviders: [provideIcons({matInfoOutline, matPlayArrow})],
  templateUrl: './simulation-menu.component.html',
  styleUrl: './simulation-menu.component.scss'
})
export class SimulationMenuComponent implements OnInit{

  constructor(protected router: Router,
              private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(startLesson({lessonKey: 'simulation'}));
  }

  navigateTo(section: string) {
    this.router.navigate(['introduction','simulation', section]);
  }

  navigateToQuiz() {
    this.store.dispatch(completeLesson({lessonKey: 'simulation'}));
    this.router.navigate(['quiz', 'introduction']);
  }
}
