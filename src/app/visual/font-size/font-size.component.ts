import { Component, OnInit } from '@angular/core';
import { CodeEditorComponent } from '../../common/code-editor/code-editor.component';
import { BrowserSimulationComponent } from '../../common/browser-simulation/browser-simulation.component';
import { WebshopComponent } from '../../usecases/webshop/webshop.component';
import { FormsModule } from '@angular/forms';
import { BarrierData, simulationData } from '../../introduction/simulation/model/simulation-type-data';

@Component({
  selector: 'app-font-size',
  imports: [
    CodeEditorComponent,
    BrowserSimulationComponent,
    WebshopComponent,
    FormsModule
  ],
  templateUrl: './font-size.component.html',
  styleUrl: './font-size.component.scss'
})
export class FontSizeComponent implements OnInit{

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
    'Versuch die CSS-Klasse so anzupassen, dass der Text beim Vergrößern lesbar ist und auch alle Informationen sichtbar sind. \n' +
    'Hinweis: Relative Größen wie Prozentangaben, em, oder auch die named Schriftgrößen sind der richtige Weg. ';
  codeExample = '.label-text{\n' +
    'font-size: 16px;\n' +
    '}\n' +
    '\n' +
    '.navbar-text{\n' +
    'font-size: 16px; \n' +
    '}\n';

  ngOnInit() {
    this.visualBarriersSimulation = [
      this.noBarrierValue,
      ...simulationData['visual'].barriers
    ];
    this.selectedSimulation = this.visualBarriersSimulation.find(el => el.id === 'farsighted');
  }

  setCorrectFontSize(style: Text): boolean {
    //TODO Check all lines for fontsize & no px;
    console.log(style);
    return true;
  }
}
