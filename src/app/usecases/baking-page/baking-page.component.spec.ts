import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakingPageComponent } from './baking-page.component';

describe('BakingPageComponent', () => {
  let component: BakingPageComponent;
  let fixture: ComponentFixture<BakingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
