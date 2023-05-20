import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DestinosService {
  
  url: String = "http://localhost:3000/";
  listaDestinos:any;

  constructor(private http:HttpClient) { }

  obtenerDestinos(): Observable<any>{
    this.listaDestinos= this.http.get(this.url+"destinos");
    return this.listaDestinos
    
  };


}
