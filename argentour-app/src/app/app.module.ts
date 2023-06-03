import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { BoletosComponent } from './pages/boletos/boletos.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { MetodosDePagoComponent } from './pages/metodos-de-pago/metodos-de-pago.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormularioProductosComponent } from './pages/formulario-productos/formulario-productos.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    MiPerfilComponent,
    BoletosComponent,
    FavoritosComponent,
    MetodosDePagoComponent,
    MainComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    CarritoComponent,
    FormularioProductosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
