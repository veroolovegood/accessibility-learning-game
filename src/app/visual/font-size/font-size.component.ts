import { Component } from '@angular/core';
import { CodeEditorComponent } from '../../common/code-editor/code-editor.component';
import { BrowserSimulationComponent } from '../../common/browser-simulation/browser-simulation.component';
import { WebshopComponent } from '../../usecases/webshop/webshop.component';

@Component({
  selector: 'app-font-size',
  imports: [
    CodeEditorComponent,
    BrowserSimulationComponent,
    WebshopComponent
  ],
  templateUrl: './font-size.component.html',
  styleUrl: './font-size.component.scss'
})
export class FontSizeComponent {

}
