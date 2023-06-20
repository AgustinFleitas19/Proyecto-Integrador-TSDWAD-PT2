import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listaUsuarios:any;
  usuario: any;
  url:string = "http://127.0.0.1:8000/api/";

  constructor( private http: HttpClient) { }

  obtenerUsuarios(): Observable<any>{
    this.listaUsuarios= this.http.get(this.url + "usuarios/");
    return this.listaUsuarios}
  obtenerPerfil(): Observable<any>{
    this.usuario= this.http.get(this.url + "user/profile/")
    return this.usuario
  }
  crearUsuario(body:any): Observable <any>{
    return this.http.post(this.url + "auth/registro/", body);
   }
  obtenerUsuario(id:number):Observable <any>{
    const options = { withCredentials: true };
    return this.http.get(`${this.url}usuario/${id}/`, options)
  }

  actualizarUsuario(body:any, id:number): Observable<any>{
    const options = { withCredentials: true };
    return this.http.patch(`${this.url}actualizarusuario/${id}/`, body, options)
  }
 
eliminarUsuario(id:number):Observable<any>{
  return this.http.delete(`${this.url}usuarios/${id}/`)
}

}
