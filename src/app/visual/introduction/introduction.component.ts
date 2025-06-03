import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BrowserSimulationComponent } from '../../common/browser-simulation/browser-simulation.component';
import { WebshopComponent } from '../../usecases/webshop/webshop.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarrierData, simulationData } from '../../introduction/simulation/model/simulation-type-data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visual-introduction',
  imports: [
    BrowserSimulationComponent,
    WebshopComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent implements OnInit {
  noBarrierValue = {id: 'none', name: 'Keine Einschränkung', explanation: ''};
  selectedSimulation?: BarrierData = this.noBarrierValue;
  visualBarriersSimulation: BarrierData[] = [];
  farsightedForm: FormGroup = new FormGroup({
    answerOne: new FormControl(false),
    answerTwo: new FormControl(false),
    answerThree: new FormControl(false),
    answerFour: new FormControl(false)
  });
  redGreenColorBlindnessForm: FormGroup = new FormGroup({
    answerOne: new FormControl(false),
    answerTwo: new FormControl(false),
    answerThree: new FormControl(false),
    answerFour: new FormControl(false)
  });
  blindnessForm: FormGroup = new FormGroup({
    answerOne: new FormControl(false),
    answerTwo: new FormControl(false),
    answerThree: new FormControl(false),
    answerFour: new FormControl(false)
  });
  absoluteColorBlindnessForm = new FormGroup({
    answerOne: new FormControl(false),
    answerTwo: new FormControl(false),
    answerThree: new FormControl(false),
    answerFour: new FormControl(false)
  });
  completedExercise: { [key: string]: boolean } = {
    'farsighted': false,
    'redGreenColorBlindness': false,
    'blindness': false,
    'absoluteColorBlindness': false
  }

  @ViewChild('completedDialog')
  private completedDialog?: TemplateRef<any>;

  constructor(private dialog: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.visualBarriersSimulation = [
      this.noBarrierValue,
      ...simulationData['visual'].barriers
    ];
  }

  submitAnswers(exercise: string, form: FormGroup) {
    this.completedExercise[exercise] = form.controls['answerOne'].value == this.answerMatrix[exercise].answerOne &&
      form.controls['answerTwo'].value == this.answerMatrix[exercise].answerTwo &&
      form.controls['answerThree'].value == this.answerMatrix[exercise].answerThree &&
      form.controls['answerFour'].value == this.answerMatrix[exercise].answerFour

    const completedAll = Object.entries(this.completedExercise).map(([_, completed]) => completed).reduce((completeResult, result) => {
      return completeResult && result;
    })
    if(completedAll){
      this.dialog.open(this.completedDialog);
    }
  }

  backToMenu(){
    this.router.navigate(['menu/visual']);
  }

  answerMatrix: {
    [key: string]: { answerOne: boolean, answerTwo: boolean, answerThree: boolean, answerFour: boolean }
  } = {
    'farsighted': {
      answerOne: true,
      answerTwo: true,
      answerThree: false,
      answerFour: false
    },
    'redGreenColorBlindness': {
      answerOne: true,
      answerTwo: false,
      answerThree: false,
      answerFour: false
    },
    'blindness': {
      answerOne: true,
      answerTwo: true,
      answerThree: false,
      answerFour: false
    },
    'absoluteColorBlindness': {
      answerOne: true,
      answerTwo: false,
      answerThree: true,
      answerFour: false
    },
  };

}
