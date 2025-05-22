import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matAlarm } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-baking-page',
  imports: [
    NgIcon
  ],
  templateUrl: './baking-page.component.html',
  styleUrl: './baking-page.component.scss',
  viewProviders: [provideIcons({ matAlarm })]
})
export class BakingPageComponent {
  startTimer() {
    const audio = document.getElementById('ding-audio') as HTMLMediaElement;
    setTimeout(() => {
      audio.play()
    }, 10000);
  }
}
