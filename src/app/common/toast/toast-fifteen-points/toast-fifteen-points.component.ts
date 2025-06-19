import { Component, input } from '@angular/core';

@Component({
  selector: 'app-toast-success',
  imports: [],
  templateUrl: './toast-fifteen-points.component.html',
  styleUrl: './toast-fifteen-points.component.scss'
})
export class ToastFifteenPointsComponent {

  points = input<number>();
  showNext = input<boolean>(false);

}
