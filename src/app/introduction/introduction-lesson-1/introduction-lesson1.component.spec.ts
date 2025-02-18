import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionLesson1 } from './introduction-lesson1.component';

describe('Lesson1Component', () => {
  let component: IntroductionLesson1;
  let fixture: ComponentFixture<IntroductionLesson1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionLesson1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionLesson1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
