import { Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matSend, matPlayArrow } from '@ng-icons/material-icons/baseline';
import { matInfoOutline } from '@ng-icons/material-icons/outline';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { NgbAccordionModule, NgbModal, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-one',
  imports: [NgIcon, NgClass, ReactiveFormsModule, NgbPopoverModule, NgbAccordionModule],
  templateUrl: './introduction-lesson-one.component.html',
  styleUrl: './introduction-lesson-one.component.scss',
  viewProviders: [provideIcons({matSend, matPlayArrow, matInfoOutline})],
  encapsulation: ViewEncapsulation.None,
})
export class IntroductionLesson1 {

  @ViewChild("introductionFormElement") formDirective?: FormGroupDirective;

  readonly EXERCISE_TWO_SOLUTION = "Barrierefrei-Challenge: 1 Sekunde! Kopier den Text um schnell weiter zu kommen!";
  readonly EXERCISE_THREE_SOLUTION = "Barrierefreiheit im Web betrifft alle und ermöglicht eine einfache Bedienung von Webinhalten"

  introductionForm: FormGroup = new FormGroup({
    exerciseOne: new FormControl(0, {validators: [Validators.min(1), Validators.max(1)]}),
    exerciseTwo: new FormControl('', {validators: [Validators.pattern(this.EXERCISE_TWO_SOLUTION || ''), Validators.required]}),
    exerciseThree: new FormControl('', {validators: [Validators.pattern(this.EXERCISE_THREE_SOLUTION ||''), Validators.required]})
  });

  submittedExerciseTwo = false;
  submittedExerciseThree = false;

  isClickable = false;
  shouldModalCloseAfterTime = true;
  textVisible = false;


  constructor(private modalService: NgbModal,
              private router: Router) {
  }

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

  openDialogForExercise(content: TemplateRef<any>) {
    const modal = this.modalService.open(content);
    if (this.shouldModalCloseAfterTime) {
      setTimeout(() => {
        modal.close();
      }, 1000);
    }
  }


  activateMouseClick() {
    this.isClickable = true;
  }

  deactivateAutomaticClosingOfDialog() {
    this.shouldModalCloseAfterTime = false;
  }

  changeTextAppereance() {
    this.textVisible = true;
  }

  navigateToNextLesson() {
    this.router.navigate(['introduction','lesson-one','quiz']);
  }
}
