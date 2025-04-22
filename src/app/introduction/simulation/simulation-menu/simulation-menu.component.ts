import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matInfoOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-simulation-menu',
  imports: [
    NgIcon
  ],
  viewProviders: [provideIcons({matInfoOutline})],
  templateUrl: './simulation-menu.component.html',
  styleUrl: './simulation-menu.component.scss'
})
export class SimulationMenuComponent {

  constructor(private router: Router) {
  }

  navigateTo(section: string) {
    this.router.navigate(['introduction','simulation', section + '-barriers']);
  }
}
