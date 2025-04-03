import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { DndDropEvent, DndModule } from 'ngx-drag-drop';
import { NgClass } from '@angular/common';
import { BehaviorSubject, skip } from 'rxjs';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matPlayArrow } from '@ng-icons/material-icons/baseline';

import confetti from 'canvas-confetti';
import { Router } from '@angular/router';

class Answer {
  displayName?: string;
  correctAnswer?: number;
}

@Component({
  selector: 'app-lesson-one-quiz',
  imports: [
    DndModule,
    NgClass,
    NgIcon
  ],
  viewProviders: [provideIcons({matPlayArrow})],
  templateUrl: './lesson-one-quiz.component.html',
  styleUrl: './lesson-one-quiz.component.scss'
})
export class LessonOneQuizComponent implements AfterViewInit {


  @ViewChild("submitButton")
  submitButton!: ElementRef;

  answers: Answer[] = [
    {displayName: 'Eingeschränkte Bedienbarkeit', correctAnswer: 1},
    {displayName: 'Informationsüberflutung', correctAnswer: -1},
    {displayName: 'Verwirrende Sprache', correctAnswer: -1},
    {displayName: 'Fehlende Lesbarkeit', correctAnswer: 3},
    {displayName: 'Zeitliche Einschränkung', correctAnswer: 2},
  ];

  submittedAnswers: Answer[] = [
    {displayName: undefined, correctAnswer: undefined},
    {displayName: undefined, correctAnswer: undefined},
    {displayName: undefined, correctAnswer: undefined}];
  validationClasses: Object[] = [];

  completedExercise = false;

  $classSubject = new BehaviorSubject<boolean[]>([false, false, false]);

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    this.$classSubject.pipe(
      skip(1)
    ).subscribe(hasError => {
      this.completedExercise = hasError.every(value => !value);
      if (this.completedExercise) {
        confetti({
          particleCount: 150,
          spread: 180,
          origin: {y: 0.6},
          colors: ['#FF5B5B', '#9F9FED', '#558564', '#F1E7BC'],
          disableForReducedMotion: true
        });
      }
      for (const [index, hasErrorAt] of hasError.entries()) {
        if (hasErrorAt) {
          this.validationClasses[index] = {'error-border': true};
        } else if (!hasErrorAt && this.completedExercise) {
          this.validationClasses[index] = {'success-border': true}
        } else {
          this.validationClasses[index] = {};
        }
      }
    });
  }

  onDrop(index: number, dropEvent: DndDropEvent) {
    //IF SAME OBJECT IS PUT BACK DONT CHANGE ANYTHING
    if (this.submittedAnswers[index - 1] !== undefined && this.submittedAnswers[index - 1]?.displayName === dropEvent.data.obj.displayName) {
      return;
    }
    //IF THE POSITION ALREADY HAS A VALUE THEN PUT THIS VALUE BACK TO THE POSSIBLE ANSWERS OR SWAP THEM
    if (this.submittedAnswers[index - 1] !== undefined && this.submittedAnswers[index - 1]?.displayName !== undefined) {
      if (this.answers.some(val => val.displayName === dropEvent.data.obj.displayName)) {
        this.answers.push(this.submittedAnswers[index - 1])
      } else if (this.submittedAnswers.some(val => val.displayName === dropEvent.data.obj.displayName)) {
        this.submittedAnswers[this.submittedAnswers.findIndex(val => val.displayName === dropEvent.data.obj.displayName)] = this.submittedAnswers[index - 1];
      }
    }
    //IF THE VALUE COMES FROM THE POSSIBLE ANSWERS, REMOVE IT FROM THE LIST, IF IT COMES FROM ANOTHER ANSWER, REMOVE IT FROM THERE
    if (this.answers.some((a) => dropEvent.data.obj.displayName == a.displayName)) {
      this.answers.splice(this.answers.findIndex((a) => dropEvent.data.obj.displayName == a.displayName), 1);
    } else if (this.submittedAnswers.some(val => val.displayName === dropEvent.data.obj.displayName)) {
      this.submittedAnswers[this.submittedAnswers.findIndex(val => val.displayName === dropEvent.data.obj.displayName)] = {
        displayName: undefined,
        correctAnswer: undefined
      }
    }
    //SET THE NEW DATA AS THE SELECTED VALUE
    this.submittedAnswers[index - 1] = dropEvent.data.obj;
  }

  onDropBack(dropEvent: DndDropEvent) {
    if (this.answers.some(val => val.displayName === dropEvent.data.obj.displayName)) {
      return;
    }
    this.answers.push(dropEvent.data.obj);
    this.submittedAnswers[dropEvent.data.index - 1] = {displayName: undefined, correctAnswer: undefined};
  }

  onSubmit() {
    this.$classSubject.next([
      (this.submittedAnswers[0] === undefined || this.submittedAnswers[0].correctAnswer !== 1),
      (this.submittedAnswers[1] === undefined || this.submittedAnswers[1].correctAnswer !== 2),
      (this.submittedAnswers[2] === undefined || this.submittedAnswers[2].correctAnswer !== 3)
    ]);
  }

  navigateToNextExercise() {
    this.router.navigate(['introduction', 'simulation'])
  }
}
