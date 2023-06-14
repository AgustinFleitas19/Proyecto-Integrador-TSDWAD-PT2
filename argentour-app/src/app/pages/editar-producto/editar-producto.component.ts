import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit{

  editarProductoFormulario;
  datosProducto:any;
  productoId:any;

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private productosService: ProductosService){
    this.editarProductoFormulario= this.formBuilder.group(
      {
      nombre: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      descripcion: ["", [Validators.required]], 
      imagen: ["", [Validators.required]],
      cantidad: [1, Validators.required],
      id_Categoria:[1, [Validators.required]]
    }
    )  
  }

ngOnInit(): void {
  this.productoId = this.activerouter.snapshot.paramMap.get('id')
  console.log(this.productoId);
  
  this.productosService.obtenerProducto(this.productoId).subscribe((data: any)=>{
    this.datosProducto= data;
    console.log(this.datosProducto);
    
    this.editarProductoFormulario.setValue({
      "nombre": this.datosProducto.nombre,
      "precio":this.datosProducto.precio,
      "descripcion": this.datosProducto.descripcion,
      "imagen":this.datosProducto.imagen,
      "cantidad": this.datosProducto.cantidad,
      "id_Categoria": this.datosProducto.id_Categoria
    })
    
  })
}

  get NombreProducto (){
    return this.editarProductoFormulario.get("nombre");
  }

  get Precio (){
    return this.editarProductoFormulario.get("precio");
  }

  get Imagen (){
    return this.editarProductoFormulario.get("imagen");
  }

  get Descripcion (){
    return this.editarProductoFormulario.get("descripcion");
  }

  get id_Categoria(){
    return this.editarProductoFormulario.get("id_Categoria");
  }

  get Cantidad(){
    return this.editarProductoFormulario.get("cantidad");
  }

  
  editarProducto(){
   if (this.editarProductoFormulario.valid){
    let productoid = this.activerouter.snapshot.paramMap.get('id')
      this.productosService.actualizarProducto(this.editarProductoFormulario.value,this.productoId).subscribe(
        {next: (productoData:any) =>{
          console.log(productoData);
    
        },
        error: (errorData:any) => {
          console.error(errorData);
          
        }

      }); 
    }
    else{
      this.editarProductoFormulario.markAllAsTouched();
    }
  }

}
