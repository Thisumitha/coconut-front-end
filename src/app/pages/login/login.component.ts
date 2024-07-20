import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductsServiceService } from '../../services/products-service.service';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../service/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, RouterLink, NavbarComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: any = '';
  password: any = ''

  constructor(private product_service: ProductsServiceService, private router: Router, private authService: AuthServiceService){}

  login():void{
    console.log(this.username,this.password);

    this.product_service.login(this.username,this.password).subscribe(response => {
      localStorage.setItem('userType', response.userType);
      this.authService.login(response.userType,response.userId);

      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: `Welcome Logged in as ${response.userType}, ${this.username}!`,
        //timer: 2000, // Automatically close after 2 seconds
        showConfirmButton: true
      }).then(() => {
        const dashboardRoute = this.getDashboardRoute(response.userType);
        this.router.navigate([dashboardRoute]);
      });
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid username or password'
      });
    });
  }

  getDashboardRoute(userType:string){
    switch(userType){
      case 'seller': return '/coconut-dashboard';
      case 'company': return '/company-dashboard';
      default: return '/login';
    }
  }

  userAuth(userType: string){

  }
}
