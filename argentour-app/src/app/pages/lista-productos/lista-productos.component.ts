import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  listaProductos:any;
  
  constructor(private productosServicio: ProductosService,
    private router:Router){

    
    this.productosServicio.obtenerProductos().subscribe({
      
      next: (productosData) =>{
        this.listaProductos = productosData;
      },
      error: (errorData) => {
        console.error(errorData);
        }
    })
  }

  
  borrarProducto(id:number){
  
    this.productosServicio.eliminarProducto(id).subscribe({
      
      next: (productoBorrado)=>{
        console.log("producto borrado ");
        
      },
      error: (errorData) => {
        console.error(errorData);
        }
    })  
  }

  editarProducto(id:number){
    this.router.navigate(['dashboard/editar-producto', id])
  }
}
