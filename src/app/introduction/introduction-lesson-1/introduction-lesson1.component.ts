import { Component, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matSend, matPlayArrow } from '@ng-icons/material-icons/baseline';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-lesson1',
  imports: [NgIcon, NgClass, ReactiveFormsModule, NgIf],
  templateUrl: './introduction-lesson1.component.html',
  styleUrl: './introduction-lesson1.component.scss',
  viewProviders: [provideIcons({matSend, matPlayArrow})]
})
export class IntroductionLesson1 {

  @ViewChild("introductionFormElement") formDirective?: FormGroupDirective;

  introductionForm: FormGroup = new FormGroup({
    exerciseOne: new FormControl(0, {validators: [Validators.min(1), Validators.max(1)]}),
    exerciseTwo: new FormControl('', {validators: [Validators.pattern('test1'), Validators.required]}),
    exerciseThree: new FormControl('', {validators: [Validators.pattern('test2'), Validators.required]})
  });

  submittedExerciseTwo = false;
  submittedExerciseThree = false;


  checkRadios(selectedValue: number) {
    if (this.introductionForm.get("exerciseOne")?.invalid && this.introductionForm.get("exerciseOne")?.value === selectedValue) {
      return {
        'bg-danger': true,
        'border-danger': true
      }
    }
    return null;
  }

  submitExerciseTwo() {
    this.submittedExerciseTwo = this.introductionForm.get("exerciseTwo")?.valid ?? false;
  }


  submitExerciseThree() {
    this.submittedExerciseThree = this.introductionForm.get("exerciseThree")?.valid ?? false;
  }
}
