import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-browser-simulation',
  imports: [
    NgClass
  ],
  templateUrl: './browser-simulation.component.html',
  styleUrl: './browser-simulation.component.scss'
})
export class BrowserSimulationComponent {
  private _simulationType?: string;

  @Input()
  urlSuffix: string = ''

  @Input()
  set simulationType(value: string | undefined) {
    this._simulationType = value;
  }

  get simulationType(){
    return this._simulationType;
  }

}
