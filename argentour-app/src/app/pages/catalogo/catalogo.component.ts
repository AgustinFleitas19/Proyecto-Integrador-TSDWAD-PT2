import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  productosList:any;
  constructor(private productosService: ProductosService,
    private router: Router){

    this.productosService.obtenerProductos().subscribe(
      {next: (productosData) =>{
        this.productosList = productosData;
      },
      error: (errorData) => {
        console.error(errorData);
        
      }
    });
  }

  verDetalles(id:number){
    this.router.navigate(['producto-details', id])
  }

}
