import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HandlerComponent } from './components/handler/handler.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CadastrarClienteComponent } from './components/cadastros/clientes/cadastrar-cliente/cadastrar-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HandlerComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    InicioComponent,
    FormsModule,
    CadastrarClienteComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blu-motos';
}
