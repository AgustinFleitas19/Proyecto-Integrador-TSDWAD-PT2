import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})
export class FormCompraComponent implements OnInit{
  productoId: any;
  datosProducto: any;
  response:any;
  compraExitosa:boolean= false;
 
 
  formularioCompra;
  constructor(
    private activerouter:ActivatedRoute,
    private productosService: ProductosService,
    private formBuilder:FormBuilder,
  ){
this.formularioCompra= this.formBuilder.group({
  nombre: ["", [Validators.required]],
  apellido: ["", [Validators.required]],
  dni:["", [Validators.required]],
  email: ["", [Validators.email, Validators.required]],
  cantidad: ["", [Validators.required]],


})

  }

  ngOnInit(): void {
    this.productoId= this.activerouter.snapshot.paramMap.get('id');
    this.productosService.obtenerProducto(this.productoId).subscribe((dataProducto: any)=>{
      this.datosProducto= dataProducto;

    })
  }

  get Nombre (){
    return this.formularioCompra.get("nombre");
  }

  get Apellido (){
    return this.formularioCompra.get("apellido");
  }

  get Dni (){
    return this.formularioCompra.get("dni");
  }

  get Email (){
    return this.formularioCompra.get("email");
  }

  get Cantidad(){
    return this.formularioCompra.get("cantidad");
  }

  Comprar(id:number, form:any){
    if(this.formularioCompra.valid){
     const cantidad= {"cantidad":this.datosProducto.cantidad - form.cantidad};
     this.productosService.pagoRealizado().subscribe((respuesta:any)=>{
      this.response= respuesta;
      console.log(respuesta);
      
      this.productosService.actualizarProducto(cantidad, this.datosProducto.id_Producto).subscribe({next: (productoData:any) =>{
        console.log(productoData);
      this.compraExitosa= true;
  
      },
      error: (errorData:any) => {
        console.error(errorData);
        
      }

    })
     })
     

     
     
      

    }
  }

}
