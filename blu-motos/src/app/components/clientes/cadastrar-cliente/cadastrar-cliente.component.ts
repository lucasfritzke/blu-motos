import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {

  cliente: Cliente = {
    nome: '',
    cpf: '',
    nascimento: '',
    telefone: '',
    email: ''
  };

  constructor(private clienteService: ClientesService, private router: Router) {}

  ngOnInit(): void {

  }

  criarCliente() {
    // Verifica se todos os dados necessários estão presentes antes de tentar enviar
    if (this.cliente.nome && this.cliente.cpf && this.cliente.email) {
      this.clienteService.criar(this.cliente).subscribe(() => {
        console.log('Cliente criado com sucesso!');

      });
    } else {
      console.log('Preencha todos os campos obrigatórios.');
    }
  }
}
