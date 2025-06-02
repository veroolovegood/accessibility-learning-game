import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WebshopCodeService } from './usecases/webshop/service/webshop-code.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [WebshopCodeService]
})
export class AppComponent {
  title = 'accessibility-learning-game';
}
