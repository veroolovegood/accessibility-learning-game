import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserSimulationComponent } from './browser-simulation.component';

describe('BrowserSimulationComponent', () => {
  let component: BrowserSimulationComponent;
  let fixture: ComponentFixture<BrowserSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserSimulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
