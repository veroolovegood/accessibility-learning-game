import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationMenuComponent } from './simulation-menu.component';

describe('SimulationMenuComponent', () => {
  let component: SimulationMenuComponent;
  let fixture: ComponentFixture<SimulationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
