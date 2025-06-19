import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastFifteenPointsComponent } from './toast-fifteen-points.component';

describe('ToastSuccessComponent', () => {
  let component: ToastFifteenPointsComponent;
  let fixture: ComponentFixture<ToastFifteenPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastFifteenPointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastFifteenPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
