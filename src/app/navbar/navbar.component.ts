import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matPersonOutline } from '@ng-icons/material-icons/outline'
import Keycloak from 'keycloak-js';
import { Store } from '@ngrx/store';
import { selectLevel } from '../state/profile/profile.selectors';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

export interface Level{
  levelNumber: number;
  levelName:  string;
}

@Component({
  selector: 'app-navbar',
  imports: [NgIcon, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({ matPersonOutline })]
})
export class NavbarComponent implements OnInit {

  level: Observable<string> = of('');


  constructor(private keycloak: Keycloak,
              private store: Store) {
  }

  ngOnInit() {
    this.level = this.store.select(selectLevel);
  }


  openOptions($event: MouseEvent) {
  }
}
