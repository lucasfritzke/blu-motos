import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



    username: string = '';
    password: string = '';

    onSubmit() {
      if (this.username === 'admin' && this.password === 'admin') {
        alert('Login bem-sucedido!');
      } else {
        alert('Credenciais inválidas!');
      }
    }


}
