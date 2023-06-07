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
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';


const routes: Routes = [
  { path:"", redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: MainComponent},
  { path: 'register', component: RegisterComponent},
  {path: 'destinos', component:CatalogoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'carrito', component: CarritoComponent},
  


  { path: 'dashboard', component: DashboardComponent,

children:[

   {path: 'perfil', component: MiPerfilComponent},
   {path: 'boletos', component: BoletosComponent},
   {path: 'favoritos', component: FavoritosComponent},
   {path: 'metodos-de-pago', component: MetodosDePagoComponent},

  ]},
  {path: 'admin', component: DashboardAdminComponent,
  children:[
    { path: 'crear-producto', component: FormularioProductosComponent},
    { path: 'lista-usuarios', component: ListaUsuariosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
