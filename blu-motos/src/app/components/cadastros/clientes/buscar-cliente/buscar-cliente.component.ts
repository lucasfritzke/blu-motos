import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-buscar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent {

  tipoBusca: string = 'nome';
  valorBusca: string = '';
  cliente: any = null;
  clienteBuscado: boolean = false;

  constructor(private clienteService: ClientesService) {}

  async buscarCliente() {
    try {
      this.cliente = await firstValueFrom(
        this.clienteService.buscarCliente(this.tipoBusca, this.valorBusca)
      );
      this.clienteBuscado = true;
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
      this.cliente = null;
      this.clienteBuscado = true;
    }
  }

  novoCliente() {
    console.log('Função para adicionar novo cliente');
  }

  alterarCliente() {
    console.log('Função para alterar cliente');
  }
}
