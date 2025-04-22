import { Component } from '@angular/core';
import { BrowserSimulationComponent } from '../../../common/browser-simulation/browser-simulation.component';
import { NgTemplateOutlet } from '@angular/common';
import { WebshopComponent } from '../../../usecases/webshop/webshop.component';

@Component({
  selector: 'app-visual-barrier-simulation',
  imports: [
    BrowserSimulationComponent,
    NgTemplateOutlet,
    WebshopComponent
  ],
  templateUrl: './visual-barrier-simulation.component.html',
  styleUrl: './visual-barrier-simulation.component.scss'
})
export class VisualBarrierSimulationComponent {

}
