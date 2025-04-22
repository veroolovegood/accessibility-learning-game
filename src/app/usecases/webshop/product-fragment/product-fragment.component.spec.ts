import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFragmentComponent } from './product-fragment.component';

describe('ProductFragmentComponent', () => {
  let component: ProductFragmentComponent;
  let fixture: ComponentFixture<ProductFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFragmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
