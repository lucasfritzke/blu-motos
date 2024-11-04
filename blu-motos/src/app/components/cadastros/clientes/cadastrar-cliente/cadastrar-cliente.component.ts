import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {
  cliente: Cliente = {
    nome: '',
    cpf: '',
    datanascimento: '',
    telefone: '',
    email: ''
  }


  constructor(private clienteService: ClientesService) {}

  async cadastrarCliente() {

    console.log(this.cliente)
    try {
      await firstValueFrom(this.clienteService.cadastrarCliente(this.cliente));
      alert('Cliente cadastrado com sucesso!');
      this.cliente = { nome: '', cpf: '', datanascimento: '', telefone: '', email: '' }; // Limpa o formulário
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      alert('Erro ao cadastrar cliente.');
    }
  }
}
