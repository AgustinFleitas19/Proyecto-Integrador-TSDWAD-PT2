import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listaUsuarios:any;
  url:string = "http://localhost:3000/usuarios";

  constructor( private http: HttpClient) { }

  obtenerUsuarios(): Observable<any>{
    this.listaUsuarios= this.http.get(this.url);
    return this.listaUsuarios}

  crearUsuario(body:any): Observable <any>{
    return this.http.post(this.url, body);
   }

  actualizarUsurio(body:any): Observable<any>{
    return this.http.put(this.url, body)
  }


}
