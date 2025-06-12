import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { QuestionElement, QuizData } from './model/quiz-data.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { quizDataMap } from './model/quiz-data-map';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PercentPipe } from '@angular/common';
import { showConfettiAnimation } from '../confetti-animation';
import { Store } from '@ngrx/store';
import * as introduction from '../../state/introduction/introduction.actions';
import * as visual from '../../state/visual/visual.actions';
import { rewardPoints } from '../../state/profile/profile.actions';

@Component({
  selector: 'app-quiz',
  imports: [
    ReactiveFormsModule,
    PercentPipe
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {

  @ViewChild('failedQuizTemplate') failedQuizTemplate?: TemplateRef<any>;
  @ViewChild('completedQuizTemplate') completedQuizTemplate?: TemplateRef<any>

  title: string = 'Abschlussquiz';
  questions: QuestionElement[] = [];
  completionRateNeeded: number = 0.8;
  quizForm?: FormGroup;
  completionRate = 0;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private modalService: NgbModal,
              private store: Store) {
  }

  createQuizForm(element: QuizData): FormGroup {
    let controls: { [key: string]: FormArray } = {};
    element.questions.forEach((question, index) => {
      controls["question" + index] = this.fb.array(question.answerOptions.map(_ => new FormControl(false, {nonNullable: true})));
    });
    const group = this.fb.group(controls);
    return group;
  }

  ngOnInit() {
    this.route.paramMap.pipe(map(param => {
      if (param.get('quizId')) {
        return {param: param.get('quizId'), data: quizDataMap[param.get('quizId')!]};
      }
      return null;
    })).subscribe((element) => {
      console.log(element);
      if (element?.data) {
        this.title = element.data.title;
        this.questions = element.data.questions;
        this.completionRateNeeded = element.data.rateNeeded;
        this.quizForm = this.createQuizForm(element.data);
      }
      if (element) {
        switch (element.param) {
          case 'introduction':
            this.store.dispatch(introduction.startLesson({lessonKey: 'finalQuiz'}));
            return;
          case 'visual':
            this.store.dispatch(visual.startLesson({lessonKey: 'finalQuiz'}));
            return;
          default:
            return;
        }

      } else {
        console.log("No Quiz Data Available for that ID");
        this.router.navigate(['home']);
      }
    });
  }

  checkQuiz() {
    let result = 0;
    this.questions.forEach((q, qIndex) => {
      const questionCorrect = q.answerOptions.map((answerOption, aIndex) => {
        const givenAnswer = (this.quizForm?.controls["question" + qIndex] as FormArray).controls[aIndex].value;
        return answerOption.isCorrect == givenAnswer;
      }).reduce((a, b) => a && b);
      if (questionCorrect) {
        result += 1;
      }
    });
    this.completionRate = result / this.questions.length;
    this.store.dispatch(rewardPoints({points: result * 5}));
    if (this.completionRate > this.completionRateNeeded) {
      showConfettiAnimation();
      this.route.paramMap.pipe(map(params => params.get('quizId'))).subscribe(param => {
        switch (param){
          case 'introduction': this.store.dispatch(introduction.completeLesson({lessonKey: 'finalQuiz'})); return;
          case 'visual': this.store.dispatch(visual.completeLesson({lessonKey: 'finalQuiz'})); return;
          default: return;
        }
      })

      this.modalService.open(this.completedQuizTemplate);
    } else {
      this.modalService.open(this.failedQuizTemplate);
    }
  }

  navigateToMenu(modal: NgbModalRef) {
    this.router.navigate(['menu', 'main']);
    modal.close();
  }

  closeModal(modal: NgbModalRef) {
    modal.close();
    this.quizForm?.reset();
  }
}
