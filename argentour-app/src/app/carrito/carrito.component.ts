import { Component } from '@angular/core';
import { DestinosService } from '../servicios/destinos/destinos.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  destinosList:any;
  constructor(private destinos: DestinosService){

    this.destinos.obtenerDestinos().subscribe(
      {next: (destinosData) =>{
        this.destinosList= destinosData;
      },
      error: (errorData) => {
        console.error(errorData);
        
      }
    });
  }


}
