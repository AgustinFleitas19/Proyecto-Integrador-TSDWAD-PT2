import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  listaUsuarios:any;

  constructor(private usuarioServicio: UsuarioService){
    this.usuarioServicio.obtenerUsuarios().subscribe(
      {next: (usuariosData) =>{
        this.listaUsuarios = usuariosData;
      },
      error: (errorData) => {
        console.error(errorData);
        
      }
    }
    )


    

  }

}
