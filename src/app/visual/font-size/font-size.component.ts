import { Component, OnInit } from '@angular/core';
import { CodeEditorComponent } from '../../common/code-editor/code-editor.component';
import { BrowserSimulationComponent } from '../../common/browser-simulation/browser-simulation.component';
import { WebshopComponent } from '../../usecases/webshop/webshop.component';
import { FormsModule } from '@angular/forms';
import { BarrierData, simulationData } from '../../introduction/simulation/model/simulation-type-data';
import { Text } from '@codemirror/state';
import { Store } from '@ngrx/store';
import { completeLesson, startLesson } from '../../state/visual/visual.actions';
import { Router } from '@angular/router';
import { rewardPoints } from '../../state/profile/profile.actions';
import { WebshopCodeService } from '../../usecases/webshop/service/webshop-code.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Location } from '@angular/common';
import { matArrowBack } from '@ng-icons/material-icons/baseline';
import { ToastFifteenPointsComponent } from '../../common/toast/toast-fifteen-points/toast-fifteen-points.component';
import { ToastService } from '../../services/toast.service';
import { InfoPopoverFontSizeComponent } from './info-popover-font-size/info-popover-font-size.component';

@Component({
  selector: 'app-font-size',
  imports: [
    CodeEditorComponent,
    BrowserSimulationComponent,
    WebshopComponent,
    FormsModule,
    NgIcon
  ],
  viewProviders: [provideIcons({matArrowBack})],
  templateUrl: './font-size.component.html',
  styleUrl: './font-size.component.scss'
})
export class FontSizeComponent implements OnInit {

  noBarrierValue = {id: 'none', name: 'Keine Einschränkung', explanation: ''};
  selectedSimulation?: BarrierData = this.noBarrierValue;
  visualBarriersSimulation: BarrierData[] = [];
  selectedTextSize: number = 0;
  explanation: string = 'In dieser Lektion schauen wir uns den Stellenwert der Schriftgröße an. Auf der ' +
    'Webseite ist der aus der Einführungslektion bekannte Webshop dargestellt, wie eine Person mit starker ' +
    'Weitsichtigkeit ihn wahrnehmen würde. Die spezielle visuelle Einschränkung kannst du über den Dropdown-Button ' +
    'anpassen. \n' +
    'Versuch nun zunächst den hinzugefügten Text zu lesen. Ganz schön schwierig oder? Wie sieht es mit vergrößern aus ' +
    '(Die Textgröße kannst du über den zusätzlichen Input verändern)? Die Webseite wurde so gebaut, dass automatisches ' +
    'Vergrößern keine Auswirkungen auf die Schriftgröße hat. Das ist natürlich schlecht für Personen, die Schwierigkeiten haben, kleinere Texte wahrzunehmen.\n' +
    '\n' +
    '<b>Versuch die CSS-Klasse so anzupassen, dass der Text beim Vergrößern lesbar ist und auch alle Informationen sichtbar sind.</b> \n' +
    'Hinweis: Relative Größen wie ' +
    '<a target="_blank" href="https://www.w3.org/TR/WCAG20-TECHS/C12.html">Prozentangaben</a>, ' +
    '<a href="https://www.w3.org/TR/WCAG20-TECHS/C14.html" target="_blank">em</a>, oder auch die ' +
    '<a target="_blank" href="https://www.w3.org/TR/WCAG20-TECHS/C13.html">named Schriftgrößen</a> sind der richtige Weg. ';
  codeExample = '.label-text{\n' +
    'font-size: 16px;\n' +
    '}\n' +
    '\n' +
    '.navbar-text{\n' +
    'font-size: 16px; \n' +
    '}\n';

  completedExercise = false;

  constructor(private store: Store,
              private router: Router,
              protected location: Location,
              private toastService: ToastService,
              private webshopService: WebshopCodeService) {
  }

  ngOnInit() {
    this.visualBarriersSimulation = [
      this.noBarrierValue,
      ...simulationData['visual'].barriers
    ];
    this.selectedSimulation = this.visualBarriersSimulation.find(el => el.id === 'farsighted');
    this.store.dispatch(startLesson({lessonKey: 'fontSize'}));
  }

  setCorrectFontSize(style: Text) {
    let results = [];
    for (let i = 0; i < style.lines; i++) {
      const textAtLine = style.line(i + 1).text;
      if (textAtLine.includes('font-size:')) {
        const fontSize = textAtLine.substring(textAtLine.indexOf(':') + 1).trim().replace(';', '');
        results.push(fontSize == 'large' || fontSize == 'normal' || fontSize == '1em' || fontSize == '1em' || fontSize == '100%');
      }
    }
    this.completedExercise = results.reduce((a,b) => a && b);
    if(this.completedExercise){
      this.store.dispatch(rewardPoints({points: 15}));
      this.toastService.show({template: ToastFifteenPointsComponent, classname: 'success', points: 15, showNext: true});
      this.store.dispatch(completeLesson({lessonKey: 'fontSize'}));
    }
  }

  navigateToMenu(){
    this.router.navigate(['menu/visual']);
  }

  updateCSS(value: number) {
    this.webshopService.setFontSizeIndicator(value);
    this.webshopService.updateCssText();
  }

  protected readonly InfoPopoverFontSizeComponent = InfoPopoverFontSizeComponent;
}
