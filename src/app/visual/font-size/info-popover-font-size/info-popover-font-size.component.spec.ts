import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPopoverFontSizeComponent } from './info-popover-font-size.component';

describe('InfoPopoverFontSizeComponent', () => {
  let component: InfoPopoverFontSizeComponent;
  let fixture: ComponentFixture<InfoPopoverFontSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPopoverFontSizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPopoverFontSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
