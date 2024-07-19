import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductsServiceService } from '../../services/products-service.service';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-coconut-seller',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './coconut-seller.component.html',
  styleUrl: './coconut-seller.component.css'
})
export class CoconutSellerComponent implements OnInit{
  companies: any[] = []
  selectedOrder: any;
  company: any;
  orderQty: Number = 0;
  lotQty: Number = 0;
  private emailKey = 'Wyun_B-TucLaPaAQK';

  constructor(private productService: ProductsServiceService, private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.getCompanies();
    this.productService.currentSeller.subscribe(seller => this.company = seller);
    console.log(this.company);
  }

  getCompanies(){
    this.productService.getAllCompanies().subscribe(response=>{
      this.companies = response;
      console.log(this.companies);

    },
    error =>{
      console.error('Error fetching coconuts',error);
    }
  );
  }

  setValue(card:any){
    this.selectedOrder=card;
    console.log(this.selectedOrder);
  }

  sellCoconut(){
    this.productService.changeSeller(this.selectedOrder);
    // this.router.navigate(['/checkout']);
    this.sendEmailToCustomer();
  }

  sendEmailToCustomer(){
    const templateParams ={
      to_email: this.company.email,
      to_name:this.company.name,
      from_name: this.selectedOrder.name
    };

    emailjs.send('service_uhcbsno','template_hgjq5r8', templateParams, this.emailKey)
    .then((response)=>{
      console.log('Order placed successfully', response.status, response.text);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your order has been sent to our team and they will contact you soon"
      })
    },(error)=>{
      console.log('Failed place order Email', error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Somthing went wrong try again later"
      })
    });
  }

  updateQuantity(){
    
  }

}
