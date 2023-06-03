import { Component } from '@angular/core';
import { ProductosService } from '../servicios/productos/productos.service';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

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
