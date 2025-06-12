import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerComponent, ColorPickerDirective } from 'ngx-color-picker';
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
    ColorPickerComponent
  ],
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

  explanation = `In dem Webshop Beispiel, welches nun mit absoluter Farbenblindheit dargestellt ist, kann man erkennen, dass der Kontrast bei dem rabattierten Preis nicht sehr hoch ist und daher schwer lesbar.

Ändere die Farbe in dem folgenden Code so, dass ein Kontrast von mindestens 4.5:1 entsteht. Bonuspunkte gibt es, wenn die Farbe im roten Spektrum bleibt ;)

Zur Hilfe hast du auch auf dieser Seite einen Kontrast-Berechner, der sich automatisch an die Farben, die du im Editor angibst, anpasst.
`
  codeExample = `.info-container {
   background-color: #F0EBD8
}

.discount-text-color {
   background-color: #F5C2C1
}`;

  constructor(private store: Store) {
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
    return contrastRatio(this.foregroundColorTryout, this.backgroundColorTryout);
  }

  setCorrectFontSize(style: Text) {
    let results: boolean[] = [];
    for (let i = 0; i < style.lines; i++) {
      const textAtLine = style.line(i + 1).text;

      //TODO check correct changes
      //
      // if (textAtLine.includes('font-size:')) {
      //   const fontSize = textAtLine.substring(textAtLine.indexOf(':') + 1).trim().replace(';', '');
      //   results.push(fontSize == 'large' || fontSize == 'normal' || fontSize == '1em' || fontSize == '100%');
      // }
    }
    this.completedExercise = results.reduce((a, b) => a && b);
    if (this.completedExercise) {
      this.store.dispatch(completeLesson({lessonKey: 'contrast'}));
    }
  }


}
