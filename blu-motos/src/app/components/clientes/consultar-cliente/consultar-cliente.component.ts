import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa o CommonModule
import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-consultar-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule], // Adiciona o CommonModule nos imports
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent {
  nome: string = '';
  clientes: Cliente[] = [];
  errorMessage: string = '';

  constructor(private clientesService: ClientesService) {}

  buscarClientes() {
    if (this.nome.trim()) {
      this.clientesService.buscarPorNome(this.nome).subscribe({
        next: (clientes) => {
          this.clientes = clientes;
          this.errorMessage = clientes.length === 0 ? 'Nenhum cliente encontrado.' : '';
        },
        error: (error) => {
          this.errorMessage = 'Erro ao buscar clientes. Tente novamente.';
        }
      });
    } else {
      this.errorMessage = 'Por favor, insira um nome.';
    }
  }
}
