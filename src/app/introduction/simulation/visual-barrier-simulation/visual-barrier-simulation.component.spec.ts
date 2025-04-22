import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualBarrierSimulationComponent } from './visual-barrier-simulation.component';

describe('VisualBarrierSimulationComponent', () => {
  let component: VisualBarrierSimulationComponent;
  let fixture: ComponentFixture<VisualBarrierSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualBarrierSimulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualBarrierSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
