import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matPlayArrow } from '@ng-icons/material-icons/baseline'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  viewProviders: [provideIcons({ matPlayArrow })]
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  startIntroduction() {
    this.router.navigate(['introduction', 'lesson-one']).then();
  }
}
