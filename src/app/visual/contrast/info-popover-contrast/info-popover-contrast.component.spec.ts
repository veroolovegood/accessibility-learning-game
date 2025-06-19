import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPopoverContrastComponent } from './info-popover-contrast.component';

describe('InfoPopoverComponent', () => {
  let component: InfoPopoverContrastComponent;
  let fixture: ComponentFixture<InfoPopoverContrastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPopoverContrastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPopoverContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
