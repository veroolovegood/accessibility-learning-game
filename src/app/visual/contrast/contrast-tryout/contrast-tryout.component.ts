import { Component, input, Input, model } from '@angular/core';
import { ColorPickerDirective } from 'ngx-color-picker';

@Component({
  selector: 'app-contrast-tryout',
  imports: [
    ColorPickerDirective
  ],
  templateUrl: './contrast-tryout.component.html',
  styleUrl: './contrast-tryout.component.scss'
})
export class ContrastTryoutComponent {
  contrastRatio = input<number>(0);
  boxSize = input<string>('6rem')
  fontSize = input<string>('1em');

  foregroundColor = model.required<string>();
  backgroundColor = model.required<string>();

  get foregroundColorVal(){
    return this.foregroundColor();
  }

  set foregroundColorVal(val: string){
    this.foregroundColor.set(val);
  }

  get backgroundColorVal(){
    return this.backgroundColor();
  }

  set backgroundColorVal(val: string){
    this.backgroundColor.set(val);
  }

}
