import { Component, OnInit } from '@angular/core';
import { BrowserSimulationComponent } from '../../../common/browser-simulation/browser-simulation.component';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { WebshopComponent } from '../../../usecases/webshop/webshop.component';
import { BarrierSimulationButton } from '../model/barrier-simulation-button.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { simulationData } from '../model/simulation-type-data';
import { BakingPageComponent } from '../../../usecases/baking-page/baking-page.component';
import { LexipediaComponent } from '../../../usecases/lexipedia/lexipedia.component';
import {
  muteAndHideVolumeControls,
  playTinitus, stopTinitus,
  unmuteAndShowVolumeControls
} from '../simulation-helpers/auditory-helpers';

@Component({
  selector: 'app-visual-barrier-simulation',
  imports: [
    BrowserSimulationComponent,
    NgTemplateOutlet,
    WebshopComponent,
    NgClass,
    BakingPageComponent,
    LexipediaComponent
  ],
  templateUrl: './barrier-simulation.component.html',
  styleUrl: './barrier-simulation.component.scss'
})
export class BarrierSimulationComponent implements OnInit {

  barriers?: BarrierSimulationButton[];

  selectedSimulation?: string;

  urlSuffix: string = '';
  title: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => {
        const barrierType = params.get('barrierType');
        console.log("Barrier Type is: " + barrierType);
        if (barrierType) {
          const selectedSimulationData = simulationData[barrierType];
          if (selectedSimulationData) {
            return selectedSimulationData;
          }
        }
        return null;
      }))
      .subscribe(data => {
        if (data) {
          this.barriers = data.barriers.map(element => {
            return {
              ...element,
              selected: false
            };
          });
          this.urlSuffix = data.urlSuffix;
          this.title = data.title;
        } else {
          console.log("Route does not exist");
          this.router.navigate(['introduction/simulation']);
        }
      });
  }

  toggleSelected(selectedBarrier: BarrierSimulationButton) {
    const oldValue = selectedBarrier.selected;
    this.barriers?.forEach(barrier => {
      barrier.selected = false
      unmuteAndShowVolumeControls();
    });
    selectedBarrier.selected = !oldValue;
    this.selectedSimulation = oldValue ? undefined : selectedBarrier.id;
    if (!oldValue && (selectedBarrier.id == 'deafness' || selectedBarrier.id == 'deafness-and-blindness')) {
      muteAndHideVolumeControls();
    }
    if(!oldValue && selectedBarrier.id == 'tinnitius'){
      playTinitus();
    } else if (oldValue && selectedBarrier.id == 'tinnitius'){
      stopTinitus();
    }
  }
}
