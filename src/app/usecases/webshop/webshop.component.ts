import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { productList } from './product-list';
import { ProductFragmentComponent } from './product-fragment/product-fragment.component';
import { WebshopCodeService } from './service/webshop-code.service';

@Component({
  selector: 'app-webshop',
  imports: [
    ProductFragmentComponent
  ],
  templateUrl: './webshop.component.html',
  styleUrl: './webshop.component.scss'
})
export class WebshopComponent implements OnInit{

  private styleElement: HTMLStyleElement | null = null;

  protected readonly productList = productList;

  constructor(private webshopCodeService: WebshopCodeService,
              private renderer: Renderer2,
              private el: ElementRef) {
  }

  ngOnInit(){
    this.webshopCodeService.cssText.subscribe((cssText) => {
      this.updateDynamicStyles(cssText);
    });
  }

  private updateDynamicStyles(cssCode: string) {
    // Vorhandenes Style-Element entfernen, um Duplikate zu vermeiden
    if (this.styleElement) {
      this.renderer.removeChild(this.el.nativeElement, this.styleElement);
      this.styleElement = null;
    }

    if (cssCode) {
      // Neues Style-Element erstellen
      this.styleElement = this.renderer.createElement('style');
      this.renderer.setAttribute(this.styleElement, 'type', 'text/css');
      this.renderer.appendChild(this.styleElement, this.renderer.createText(cssCode));

      // Style-Element zum `browser-content` hinzufügen
      // Oder direkt in das `nativeElement` (der Host-Element der Simulation)
      const browserContent = this.el.nativeElement.querySelector('#webshop-container');
      if (browserContent) {
        this.renderer.appendChild(browserContent, this.styleElement);
      } else {
        // Fallback, falls .browser-content nicht gefunden wird
        this.renderer.appendChild(this.el.nativeElement, this.styleElement);
      }
    }
  }

}
