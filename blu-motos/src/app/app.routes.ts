import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainComponent } from './components/main/main.component';
import { ClientesComponent } from './components/cadastros/clientes/clientes.component';
import { FornecedoresComponent } from './components/cadastros/fornecedores/fornecedores.component';
import { ProdutosComponent } from './components/cadastros/produtos/produtos.component';
import path from 'path';
import { CadastrarOsComponent } from './components/ordem-servico/cadastrar-os/cadastrar-os.component';
import { ConsultarOsEmAndamentoComponent } from './components/ordem-servico/consultar-os-em-andamento/consultar-os-em-andamento.component';
import { ConsultarOsConcluidasComponent } from './components/ordem-servico/consultar-os-concluidas/consultar-os-concluidas.component';
import { OrcamentosComponent } from './components/orcamentos/orcamentos.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';



export const routes: Routes = [
{path: "", redirectTo: 'inicio', pathMatch: "full" },
{path: 'inicio', component: InicioComponent },
{path: 'cliente' , component: ClientesComponent},
{path: 'fornecedores', component: FornecedoresComponent},
{path: 'produtos', component: ProdutosComponent},
{path: 'cadastrar-os', component: CadastrarOsComponent},
{path: 'consulta-os-em-andamento', component: ConsultarOsEmAndamentoComponent},
{path: 'consulta-os-em-andamento', component: ConsultarOsConcluidasComponent},
{path: 'orcamentos', component: OrcamentosComponent},
{path: 'relatorios', component: RelatorioComponent},

];
