import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:string ="http://127.0.0.1:8000/api/";
  listaProductos: any;
  producto:any;

  constructor(private http:HttpClient) { }

  obtenerProductos(): Observable<any>{
    this.listaProductos= this.http.get(this.url + "productos/");
    return this.listaProductos}

  

  crearProducto(body:any){
    return this.http.post(this.url + "agregarproducto/", body);
   }

   
  actualizarProducto(body:any, id:number){
    const options = { withCredentials: true };
    return this.http.patch(`${this.url}modificarproducto/${id}/`, body, options )
    }


   eliminarProducto(id:number){
    const options = { withCredentials: true };
    return this.http.delete(`${this.url}productos/${id}`, options);
    } 


    obtenerProducto(id:any){
      this.producto= this.http.get(this.url+ "producto/" + id)
      return this.producto
     }
  
  }
  
  
  



