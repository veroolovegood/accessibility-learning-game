import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-browser-simulation',
  imports: [
    NgClass
  ],
  templateUrl: './browser-simulation.component.html',
  styleUrl: './browser-simulation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BrowserSimulationComponent {
  private _simulationType?: string;
  private cursorElement?: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @Input()
  urlSuffix: string = ''

  @Input()
  set simulationType(value: string | undefined) {
    this._simulationType = value;
  }

  get simulationType(){
    return this._simulationType;
  }

  isShaking = false;

  onMouseMove(event: MouseEvent): void {
    if(this._simulationType == 'parkinson') {
      const x = event.clientX;
      const y = event.clientY;

      this.renderer.setStyle(this.cursorElement, 'left', `${x}px`);
      this.renderer.setStyle(this.cursorElement, 'top', `${y}px`);
      // Aktiviert den Zitter-Effekt
      this.isShaking = true;

      // Deaktiviert den Effekt nach einer kurzen Zeit
      setTimeout(() => {
        this.isShaking = false;
      }, 1000); // 100ms entspricht der Animationsdauer
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    if(this._simulationType == 'parkinson'){
      this.removeCustomCursor();
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    if(this._simulationType == 'parkinson'){
      this.addCustomCursor();
    }
  }

  addCustomCursor(){
    this.cursorElement = this.renderer.createElement('div');
    this.renderer.addClass(this.cursorElement, 'custom-cursor');
    this.renderer.appendChild(this.el.nativeElement, this.cursorElement);
  }

  removeCustomCursor(){
    this.renderer.removeChild(this.el.nativeElement, this.cursorElement);
  }

}
