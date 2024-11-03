import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';


@Component({
  selector: 'app-cadastrar-cliente',
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
      this.clienteService.criar(this.cliente).pipe(
        catchError((error) => {
          if (error.status === 409) {
            // Mostra uma mensagem ao usuário se o CPF já estiver cadastrado
            alert('Erro: O CPF informado já está cadastrado.');
          } else {
            // Tratamento genérico para outros erros
            alert('Erro ao criar cliente. Por favor, tente novamente.');
          }
          return of(null); // Retorna um observable vazio para evitar o erro no fluxo
        })
      ).subscribe((response) => {
        if (response) {
          alert('Cliente criado com sucesso!');
          // Aqui você pode adicionar um redirecionamento ou limpeza do formulário se necessário
        }
      });
    } else {
      alert('Preencha todos os campos obrigatórios.');
    }
  }
}
