import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-producto-details',
  templateUrl: './producto-details.component.html',
  styleUrls: ['./producto-details.component.css']
})
export class ProductoDetailsComponent implements OnInit{
  datosProducto:any;
  productoId:any;

  constructor(private activerouter:ActivatedRoute,
    private router: Router,
    private productosService: ProductosService){}

  ngOnInit(): void {
    this.productoId= this.activerouter.snapshot.paramMap.get('id');
    this.productosService.obtenerProducto(this.productoId).subscribe((dataProducto: any)=>{
      this.datosProducto= dataProducto;

    })
  }

  comprarProducto(id:number){
    this.router.navigate(['comprar',id])
  }

}
