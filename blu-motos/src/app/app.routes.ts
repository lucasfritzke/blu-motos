import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainComponent } from './components/main/main.component';
import { CadastrarClienteComponent } from './components/clientes/cadastrar-cliente/cadastrar-cliente.component';
import { ConsultarClienteComponent } from './components/clientes/consultar-cliente/consultar-cliente.component';


export const routes: Routes = [
{path: "", redirectTo: 'inicio', pathMatch: "full" },
{path: 'inicio', component: InicioComponent },
{path: 'cadastrar-cliente' , component: CadastrarClienteComponent},
{ path: 'consultar-cliente', component: ConsultarClienteComponent },

];
