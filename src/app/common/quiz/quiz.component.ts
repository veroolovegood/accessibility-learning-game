import { Component, OnInit } from '@angular/core';
import { QuestionElement } from './model/quiz-data.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { quizDataMap } from './model/quiz-data-map';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit{
  title: string = 'Abschlussquiz';
  questions: QuestionElement[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(map(param => {
      if(param.get('quizId')) {
        return quizDataMap[param.get('quizId')!];
      }
      return null;
    })).subscribe((element) => {
      if(element){
        this.title = element.title;
        this.questions = element.questions;
      } else {
        console.log("No Quiz Data Available for that ID");
        this.router.navigate(['home']);
      }
    });
  }
}
