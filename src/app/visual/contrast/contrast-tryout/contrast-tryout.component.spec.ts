import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrastTryoutComponent } from './contrast-tryout.component';

describe('ContrastTryoutComponent', () => {
  let component: ContrastTryoutComponent;
  let fixture: ComponentFixture<ContrastTryoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContrastTryoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContrastTryoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
