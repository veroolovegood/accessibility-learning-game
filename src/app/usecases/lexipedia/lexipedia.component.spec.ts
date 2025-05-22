import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexipediaComponent } from './lexipedia.component';

describe('LexipediaComponent', () => {
  let component: LexipediaComponent;
  let fixture: ComponentFixture<LexipediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LexipediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LexipediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
