import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-success',
  imports: [],
  templateUrl: './toast-fifteen-points.component.html',
  styleUrl: './toast-fifteen-points.component.scss'
})
export class ToastFifteenPointsComponent implements  OnInit {

  points = input<number>();
  showNext = input<boolean>(false);
  additionalText = input<string>("");

  ngOnInit() {
    console.log(this.additionalText());
  }

}
