import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})


export class ClientesService {

  private readonly API = 'http://localhost:8080/api/cliente';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


  }

  buscarCliente(tipo: string, valor: string): Observable<Cliente> {
    const url = `${this.API}/buscar?${tipo}=${valor}`;
    return this.http.get<Cliente>(url);
}

cadastrarCliente(cliente: Cliente): Observable<Cliente> {
  return this.http.post<Cliente>(this.API, cliente);
}



}
