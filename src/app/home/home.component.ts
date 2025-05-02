import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matPlayArrow } from '@ng-icons/material-icons/baseline'
import { Router } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-home',
  imports: [NgIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  viewProviders: [provideIcons({ matPlayArrow })]
})
export class HomeComponent {

  constructor(private router: Router, private keycloak: Keycloak) {
  }

  startIntroduction() {
    if(!this.keycloak.authenticated) {
      this.keycloak.login();
    } else {
      this.router.navigate(['introduction', 'lesson-one']).then();
    }
  }
}
