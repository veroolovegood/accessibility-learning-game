import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matPersonOutline } from '@ng-icons/material-icons/outline'
import Keycloak from 'keycloak-js';

export interface Level{
  levelNumber: number;
  levelName:  string;
}

@Component({
  selector: 'app-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({ matPersonOutline })]
})
export class NavbarComponent implements OnInit {


  constructor(private keycloak: Keycloak) {
  }

  ngOnInit() {
    if(this.keycloak.authenticated) {
      this.keycloak.loadUserProfile().then(_ => {
      })
    }
  }


  openOptions($event: MouseEvent) {
  }
}
