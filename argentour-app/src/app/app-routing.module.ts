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


const routes: Routes = [

  {path: '', component: MainComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'crear-producto', component: FormularioProductosComponent},


  { path: 'dashboard', component: DashboardComponent,

children:[

   {path: 'perfil', component: MiPerfilComponent},
   {path: 'boletos', component: BoletosComponent},
   {path: 'favoritos', component: FavoritosComponent},
   {path: 'metodos-de-pago', component: MetodosDePagoComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
