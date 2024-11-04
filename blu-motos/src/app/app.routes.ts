import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FornecedoresComponent } from './components/cadastros/fornecedores/fornecedores.component';
import { ProdutosComponent } from './components/cadastros/produtos/produtos.component';
import { CadastrarOsComponent } from './components/ordem-servico/cadastrar-os/cadastrar-os.component';
import { ConsultarOsEmAndamentoComponent } from './components/ordem-servico/consultar-os-em-andamento/consultar-os-em-andamento.component';
import { ConsultarOsConcluidasComponent } from './components/ordem-servico/consultar-os-concluidas/consultar-os-concluidas.component';
import { OrcamentosComponent } from './components/orcamentos/orcamentos.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { BuscarClienteComponent } from './components/cadastros/clientes/buscar-cliente/buscar-cliente.component';
import { CadastrarClienteComponent } from './components/cadastros/clientes/cadastrar-cliente/cadastrar-cliente.component';



export const routes: Routes = [
{path: "", redirectTo: 'inicio', pathMatch: "full" },
{path: 'inicio', component: InicioComponent },
{path: 'clientes' , component: BuscarClienteComponent},
{path: 'fornecedores', component: FornecedoresComponent},
{path: 'produtos', component: ProdutosComponent},
{path: 'cadastrar-os', component: CadastrarOsComponent},
{path: 'consulta-os-em-andamento', component: ConsultarOsEmAndamentoComponent},
{path: 'consulta-os-em-andamento', component: ConsultarOsConcluidasComponent},
{path: 'orcamentos', component: OrcamentosComponent},
{path: 'relatorios', component: RelatorioComponent},
{path: 'cadastrar-cliente', component: CadastrarClienteComponent }

];
