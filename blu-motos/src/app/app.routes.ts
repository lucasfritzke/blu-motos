import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },  // Apenas exemplo para outra rota
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para o login ao acessar a raiz
  { path: '**', redirectTo: '/login' } // Redireciona para login em caso de rota não encontrada
];
