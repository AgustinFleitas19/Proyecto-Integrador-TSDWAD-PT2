import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { BoletosComponent } from './pages/boletos/boletos.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { MetodosDePagoComponent } from './pages/metodos-de-pago/metodos-de-pago.component';
import { MainComponent } from './main/main.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormularioProductosComponent } from './pages/formulario-productos/formulario-productos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { AuthGuard } from './auth/auth.guard';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';


const routes: Routes = [
  {path:"", redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: MainComponent},
  { path: 'register', component: RegisterComponent},
  {path: 'destinos', component:CatalogoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'carrito', component: CarritoComponent},
  


  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard],

children:[

  {path: 'perfil', component: MiPerfilComponent},
  { path: 'crear-producto', component: FormularioProductosComponent},
  { path: 'lista-usuarios', component: ListaUsuariosComponent},
  { path: 'lista-productos', component: ListaProductosComponent},
  { path: 'editar-producto/:id', component: EditarProductoComponent},

  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
