import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  usuario:any;
  constructor(private usuarioServicio:UsuarioService){

    this.usuarioServicio.obtenerPerfil().subscribe(
      {next: (perfilData) =>{
        this.usuario = perfilData;
      },
      error: (errorData) => {
        console.error(errorData);
        
      }
    });

  }

}
