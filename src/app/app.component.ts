import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WebshopCodeService } from './usecases/webshop/service/webshop-code.service';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './services/toast.service';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgbToast, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [WebshopCodeService]
})
export class AppComponent {
  title = 'accessibility-learning-game';

  constructor(protected toastService: ToastService) {
  }
}
