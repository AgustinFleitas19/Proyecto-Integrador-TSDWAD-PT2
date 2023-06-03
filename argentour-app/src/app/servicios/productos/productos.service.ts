import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:string ="http://localhost:3000/producto";
  listaProductos: any;

  constructor(private http:HttpClient) { }

  obtenerProductos(): Observable<any>{
    this.listaProductos= this.http.get(this.url);
    return this.listaProductos}

  crearProducto(body:any){
    return this.http.post(this.url, body);
   }
}




