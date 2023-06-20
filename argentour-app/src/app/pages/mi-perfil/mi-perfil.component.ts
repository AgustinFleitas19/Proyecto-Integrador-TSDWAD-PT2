import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  usuario:any;
  constructor(private usuarioServicio:UsuarioService,
    private router: Router){

    this.usuarioServicio.obtenerPerfil().subscribe(
      {next: (perfilData) =>{
        this.usuario = perfilData;
        console.log(this.usuario);
        
      },
      error: (errorData) => {
        console.error(errorData);
        
      }
    });

  }

  editarPerfil(id:number){
    this.router.navigate(['dashboard/editar-usuario', id])
  }

}
