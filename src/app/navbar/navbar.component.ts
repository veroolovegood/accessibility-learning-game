import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matPersonOutline } from '@ng-icons/material-icons/outline'

@Component({
  selector: 'app-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({ matPersonOutline })]
})
export class NavbarComponent {

  openOptions($event: MouseEvent) {
    console.log("clicked Button");
    //just a test
  }
}
