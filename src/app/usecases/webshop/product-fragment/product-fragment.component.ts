import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ColorWithImage, Product } from '../product-list';
import { matShoppingCartRound } from '@ng-icons/material-icons/round';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-fragment',
  imports: [
    NgIcon,
    ReactiveFormsModule
  ],
  templateUrl: './product-fragment.component.html',
  styleUrl: './product-fragment.component.scss',
  viewProviders: [provideIcons({ matShoppingCartRound })],
  encapsulation: ViewEncapsulation.None
})
export class ProductFragmentComponent implements OnInit {

  @Input({required: true})
  product!: Product;

  productForm?: FormGroup<{size: FormControl<string>, color: FormControl<ColorWithImage>}>;

  ngOnInit() {
   this.productForm = new FormGroup({
      size: new FormControl('M') as FormControl<string>,
      color: new FormControl(this.product.colors[0]) as FormControl<ColorWithImage>
    })
  }

}
