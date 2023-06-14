import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';
import { UsuarioI } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string= "http://localhost:8000/api/auth/login/";
  currentUserSubject: BehaviorSubject<UsuarioI>;
  currentUser: Observable<UsuarioI>;
  loggedIn: BehaviorSubject<boolean>;
  
  

  constructor(private http: HttpClient) {
    console.log("servicio de autenticacion corriendo");
    this.loggedIn= new BehaviorSubject<boolean>(false);
    this.currentUserSubject= new BehaviorSubject<UsuarioI>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
    this.currentUser= this.currentUserSubject.asObservable();
    
   }

   login(usuario: UsuarioI): Observable<any>{
    return this.http.post<any>(this.url, usuario)
      .pipe(map(data =>{
        console.log(data)
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.loggedIn.next(true);
        return data
      }))
    }

    logout():void{
      localStorage.removeItem('currentUser');
      this.loggedIn.next(false);
      
    }

    get usuarioAutenticado(): UsuarioI{
      return this.currentUserSubject.value
    }

    get estaAutenticado(): Observable<boolean>{
      return this.loggedIn.asObservable();
    }

    esAdmin(): Observable<boolean> {
      return this.currentUserSubject.pipe(
        filter(user => user !== null),
        map(user => user.is_staff || false)
      );
    }
}
