import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-browser-simulation',
  imports: [],
  templateUrl: './browser-simulation.component.html',
  styleUrl: './browser-simulation.component.scss'
})
export class BrowserSimulationComponent {

  @Input()
  urlSuffix: string = '';

}
