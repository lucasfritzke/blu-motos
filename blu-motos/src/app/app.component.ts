import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HandlerComponent } from './components/handler/handler.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HandlerComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    InicioComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blu-motos';
}
