import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Cliente } from '../cliente.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buscar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent {

  tipoBusca: string = 'nome';
  valorBusca: string = '';
  cliente: Cliente | null = null

  clienteBuscado: boolean = false;

  constructor(private clienteService: ClientesService) {}

  async buscarCliente() {
    try {
      const resultado = await firstValueFrom(
        this.clienteService.buscarCliente(this.tipoBusca, this.valorBusca)
      );
      this.cliente = Array.isArray(resultado) ? resultado[0] : resultado; // Pega o primeiro item do array se necessário
      this.clienteBuscado = true;
      console.log(this.cliente);
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
      this.clienteBuscado = true;
    }
  }


  novoCliente() {
    alert('Função para adicionar novo cliente');
  }

  alterarCliente() {
    alert('Função para alterar cliente');
  }
}
