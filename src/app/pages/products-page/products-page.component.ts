import { Component, OnInit} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductsServiceService } from '../../services/products-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { FooterComponent } from "../../components/footer/footer.component";
@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CommonModule, FooterComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit{

  // products: any[] = [];
  // features: any[] = [];
  // selectedCard: any;

  // constructor(private productService:ProductsServiceService, private router: Router) {}

  // ngOnInit(): void {

  //   this.getProducts();
  // }

  //     getProducts(){
  //       this.productService.getProducts().subscribe(
  //         (response)=>{
  //           this.products=response;
  //           console.log(this.products);

  //         },
  //         (error) =>{
  //           console.error(error);
  //         }
  //       );
  //     }

  //     setValue(card:any){
  //       this.selectedCard=card;
  //       console.log(this.selectedCard);
  //       this.getFeatures(this.selectedCard.id);
  //     }

  //     getFeatures(id:any){
  //       this.productService.getFeatures(id).subscribe(
  //         (response)=>{
  //           this.features=response;
  //           console.log(response);
  //         }
  //       )
  //     }

  //     purchaseProduct(){
  //       this.productService.changeProduct(this.selectedCard);
  //       this.router.navigate(['/checkout']);
  //     }

  ngOnInit(): void {

  }

  }
