import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrierSimulationComponent } from './barrier-simulation.component';

describe('VisualBarrierSimulationComponent', () => {
  let component: BarrierSimulationComponent;
  let fixture: ComponentFixture<BarrierSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarrierSimulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrierSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
