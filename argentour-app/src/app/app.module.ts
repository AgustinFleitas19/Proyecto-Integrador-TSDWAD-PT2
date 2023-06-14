import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { UsuarioService } from './servicios/usuario/usuario.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';




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
    CatalogoComponent,
    ListaUsuariosComponent,
    ListaProductosComponent,
    EditarProductoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    

  ],
  providers: [UsuarioService,
  
    
  {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},
],


  bootstrap: [AppComponent]
})
export class AppModule { }
