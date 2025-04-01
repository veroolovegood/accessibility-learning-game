import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOneQuizComponent } from './lesson-one-quiz.component';

describe('LessonOneQuizComponent', () => {
  let component: LessonOneQuizComponent;
  let fixture: ComponentFixture<LessonOneQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonOneQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonOneQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
