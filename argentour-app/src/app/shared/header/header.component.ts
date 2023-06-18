import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  estaAutenticado:boolean= false;
  
  constructor(
    private authService: AuthService){
}

ngOnInit(){
  this.authService.estaAutenticado.subscribe(autenticado => {
    
    this.estaAutenticado = autenticado;}
  )
}
}
