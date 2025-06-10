import { Component } from '@angular/core';
import { NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerDirective } from 'ngx-color-picker';
import { contrastRatio } from "wcag-contrast-utils";

@Component({
  selector: 'app-contrast',
  imports: [
    NgbNavItem,
    NgbNav,
    NgbNavLink,
    NgbNavContent,
    NgbNavOutlet,
    ColorPickerDirective
  ],
  templateUrl: './contrast.component.html',
  styleUrl: './contrast.component.scss'
})
export class ContrastComponent {
  activeTab: number = 1;

  foregroundColor: string = '#F5C2C1';
  backgroundColor: string = '#F0EBD8';

  get contrastRatio(){
    return contrastRatio(this.foregroundColor, this.backgroundColor);
  }

}
