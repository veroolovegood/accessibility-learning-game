import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { contrastRatio } from "wcag-contrast-utils";
import { BrowserSimulationComponent } from '../../common/browser-simulation/browser-simulation.component';
import { CodeEditorComponent } from '../../common/code-editor/code-editor.component';
import { FormsModule } from '@angular/forms';
import { WebshopComponent } from '../../usecases/webshop/webshop.component';
import { BarrierData, simulationData } from '../../introduction/simulation/model/simulation-type-data';
import { Text } from '@codemirror/state';
import { completeLesson, startLesson } from '../../state/visual/visual.actions';
import { Store } from '@ngrx/store';
import { ContrastTryoutComponent } from './contrast-tryout/contrast-tryout.component';
import hexRgb from 'hex-rgb';
import { Router } from '@angular/router';
import { rewardPoints } from '../../state/profile/profile.actions';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Location, NgComponentOutlet } from '@angular/common';
import { matArrowBack } from '@ng-icons/material-icons/baseline';
import { ToastService } from '../../services/toast.service';
import { ToastFifteenPointsComponent } from '../../common/toast/toast-fifteen-points/toast-fifteen-points.component';
import { InfoPopoverContrastComponent } from './info-popover-contrast/info-popover-contrast.component';
import { matInfoOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-contrast',
  imports: [
    NgbNavItem,
    NgbNav,
    NgbNavLink,
    NgbNavContent,
    NgbNavOutlet,
    BrowserSimulationComponent,
    CodeEditorComponent,
    FormsModule,
    WebshopComponent,
    ContrastTryoutComponent,
    NgIcon,
    NgComponentOutlet,
    NgbPopover
  ],
  viewProviders: [provideIcons({matArrowBack, matInfoOutline})],
  templateUrl: './contrast.component.html',
  styleUrl: './contrast.component.scss'
})
export class ContrastComponent implements OnInit {
  activeTab: number = 1;

  foregroundColorTryout: string = '#F5C2C1';
  backgroundColorTryout: string = '#F0EBD8';
  foregroundColorExercise: string = '#F5C2C1';
  backgroundColorExercise: string = '#F0EBD8';
  noBarrierValue = {id: 'none', name: 'Keine Einschränkung', explanation: ''};
  selectedSimulation?: BarrierData = this.noBarrierValue;
  visualBarriersSimulation: BarrierData[] = [];
  completedExercise: boolean = false;
  redIsDominant: boolean = false;

  explanation = `In dem Webshop Beispiel, welches nun mit absoluter Farbenblindheit dargestellt ist, kann man erkennen, dass der Kontrast bei dem rabattierten Preis nicht sehr hoch ist und daher schwer lesbar.

Ändere die Farbe in dem folgenden Code so, dass ein Kontrast von mindestens 4.5:1 entsteht. Bonuspunkte gibt es, wenn die Farbe im roten Spektrum bleibt ;)

Zur Hilfe hast du auch auf dieser Seite einen Kontrast-Berechner, der sich automatisch an die Farben, die du im Editor angibst, anpasst.
`
  codeExample = `#webshop-navbar {
   background-color: #E7E4D8;
}

.reduced-price {
   color: #F5C2C1;
}`;

  constructor(private store: Store,
              private router: Router,
              private toastService: ToastService,
              protected location: Location) {
  }

  ngOnInit(): void {
    this.visualBarriersSimulation = [
      this.noBarrierValue,
      ...simulationData['visual'].barriers
    ];
    this.selectedSimulation = this.visualBarriersSimulation.find(el => el.id === 'absolute-color-blindness');
    this.store.dispatch(startLesson({lessonKey: 'contrast'}));
  }

  get contrastRatioTryout() {
    return contrastRatio(this.foregroundColorTryout, this.backgroundColorTryout);
  }

  get contrastRatioExercise() {
    return contrastRatio(this.foregroundColorExercise, this.backgroundColorExercise);
  }

  setCorrectFontSize(style: Text) {
    const oldValCompleted = this.completedExercise;
    const oldValRedDominant = this.redIsDominant;
    if(!this.completedExercise || !this.redIsDominant) {
      for (let i = 0; i < style.lines; i++) {
        const textAtLine = style.line(i + 1).text;
        if (textAtLine.includes('color:') && style.line(i).text.includes('.reduced-price')) {
          const color = textAtLine.substring(textAtLine.indexOf(':') + 1).trim().replace(';', '');
          const rgb = hexRgb(color);
          this.completedExercise = contrastRatio(color, this.backgroundColorExercise) > 4.5;
          this.redIsDominant = rgb.red > rgb.blue && rgb.red > rgb.green;

        }
      }
      let redDominantWarning = "Rot ist aber noch nicht die dominante Farbe. Für weitere 5 Punkte, versuch es mal mit einer etwas anderen Farbe!";
      if (this.completedExercise) {
        let pointsToAward = 0;
        if(!oldValCompleted){
          pointsToAward += 10;
        }
        if (this.redIsDominant && !oldValRedDominant) {
          redDominantWarning = "";
          pointsToAward += 5;
        }
        console.log(redDominantWarning);
        this.store.dispatch(rewardPoints({points: pointsToAward}));
        this.toastService.show({
          template: ToastFifteenPointsComponent,
          classname: 'success',
          points: pointsToAward,
          showNext: true,
          additionalText: redDominantWarning
        });
        this.store.dispatch(completeLesson({lessonKey: 'contrast'}));
      }
    }
  }


  navigateToMenu() {
    this.router.navigate(['menu/visual']);
  }

  protected readonly infoPopover = InfoPopoverContrastComponent;
}
