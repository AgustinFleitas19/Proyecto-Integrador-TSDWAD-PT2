import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAdmin: boolean= false;

  constructor(
    private authService:AuthService,
    private router:Router,
    ){}

    ngOnInit() {
      this.esAdmin();
    }

    LogOut(){
      this.authService.logout()
      console.log("Cerraste sesión");
      this.router.navigateByUrl('/inicio')
      
    }

    
    esAdmin (){
      this.authService.esAdmin().subscribe(admin=>{
        this.isAdmin= admin
        
        console.log(`es admin: ${this.isAdmin}`);
        return this.isAdmin
      })
        
    }
    
    
  }


