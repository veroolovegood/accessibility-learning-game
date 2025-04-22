import { Component } from '@angular/core';
import { productList } from './product-list';
import { ProductFragmentComponent } from './product-fragment/product-fragment.component';

@Component({
  selector: 'app-webshop',
  imports: [
    ProductFragmentComponent
  ],
  templateUrl: './webshop.component.html',
  styleUrl: './webshop.component.scss'
})
export class WebshopComponent {

  protected readonly productList = productList;

}
