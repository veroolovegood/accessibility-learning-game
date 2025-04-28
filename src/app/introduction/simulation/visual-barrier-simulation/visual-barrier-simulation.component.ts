import { Component } from '@angular/core';
import { BrowserSimulationComponent } from '../../../common/browser-simulation/browser-simulation.component';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { WebshopComponent } from '../../../usecases/webshop/webshop.component';

export interface BarrierSimulationButton {
  name: string;
  selected: boolean;
  explaination: string;
  classToApply: string;
}

@Component({
  selector: 'app-visual-barrier-simulation',
  imports: [
    BrowserSimulationComponent,
    NgTemplateOutlet,
    WebshopComponent,
    NgClass
  ],
  templateUrl: './visual-barrier-simulation.component.html',
  styleUrl: './visual-barrier-simulation.component.scss'
})
export class VisualBarrierSimulationComponent {

  barriers = [{
    name: 'Weitsichtigkeit',
    selected: false,
    explaination: 'Kleine Schrift und feine Details sind schwer lesbar, was das Erfassen von Inhalten auf der Webseite beeinträchtigt.',
    classToApply: 'farsighted',
  } as unknown as BarrierSimulationButton,
    {
      name: 'Rot-Grün Farbenblindheit',
      selected: false,
      explaination: 'Rote und grüne Farbtöne lassen sich nur schwer unterscheiden, was das Erkennen von farblich codierten Informationen problematisch macht.',
      classToApply: 'red-green-color-blindness'
    } as unknown as BarrierSimulationButton,
    {
      name: 'Totale Farbenblindheit',
      selected: false,
      explaination: 'Da alles in Graustufen wahrgenommen wird, sind Webseiten, die nur auf Farben zur Informationsvermittlung setzen, schwer verständlich.',
      classToApply: 'absolute-color-blindness'
    } as unknown as BarrierSimulationButton,
    {
      name: 'Grauer Star',
      selected: false,
      explaination: 'Das eingeschränkte Sichtfeld und das verschwommene Sehen erschweren es, alle Inhalte auf einer Webseite zu erfassen.',
      classToApply: 'cataract'
    } as unknown as BarrierSimulationButton,
    {
      name: 'Tunnelblick',
      selected: false,
      explaination: 'Das periphere Sehen ist stark eingeschränkt, wodurch nur ein kleiner Teil der Webseite sichtbar ist und die Orientierung erschwert wird.',
      classToApply: 'tunnelvision'
    } as unknown as BarrierSimulationButton,
  ];

  selectedSimulation?: string = '';

  toggleSelected(selectedBarrier: BarrierSimulationButton) {
    const oldValue = selectedBarrier.selected;
    this.barriers.forEach(barrier => {barrier.selected = false});
    selectedBarrier.selected = !oldValue;
    this.selectedSimulation = oldValue ? undefined : selectedBarrier.classToApply;
  }
}
