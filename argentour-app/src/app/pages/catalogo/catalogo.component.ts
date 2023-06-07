import { Component } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  productosList:any;
  constructor(private productosService: ProductosService){

    this.productosService.obtenerProductos().subscribe(
      {next: (productosData) =>{
        this.productosList = productosData;
      },
      error: (errorData) => {
        console.error(errorData);
        
      }
    });
  }


}
