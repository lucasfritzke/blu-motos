import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainComponent } from './components/main/main.component';
import { CadastrarComponent } from './components/clientes/cadastrar/cadastrar.component';


export const routes: Routes = [
{
  path: 'inicio', component: InicioComponent
},
{path: '', redirectTo: "inicio", pathMatch: 'full'},
{path: 'cadastrarClientes', component: CadastrarComponent}

];
