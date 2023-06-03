import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent {
  formularioProducto;
  

  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService){
    this.formularioProducto= this.formBuilder.group(
      {
      nombreProducto: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      descripcion: ["", [Validators.required]], 
      imagen: ["", [Validators.required]]
    }
    )  
  }

  get NombreProducto (){
    return this.formularioProducto.get("nombreProducto");
  }

  get Precio (){
    return this.formularioProducto.get("precio");
  }

  get Imagen (){
    return this.formularioProducto.get("imagen");
  }

  get Descripcion (){
    return this.formularioProducto.get("descripcion");
  }

  crearProducto(){
    if (this.formularioProducto.valid){
      this.productosService.crearProducto(this.formularioProducto.value).subscribe(
        {next: (productoData:any) =>{
          console.log(productoData);
          ;
        },
        error: (errorData:any) => {
          console.error(errorData);
          
        }

      }); 
    }
    else{
      this.formularioProducto.markAllAsTouched();
    }
  }
}
