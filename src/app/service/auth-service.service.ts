import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from '../services/products-service.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userId: String = '';

  private sellerSource = new BehaviorSubject<any>(null);
  currentSeller = this.sellerSource.asObservable();

  private companySource = new BehaviorSubject<any>(null);
  currentCompany = this.sellerSource.asObservable();

  changeSeller(sellerId: String){
    this.sellerSource.next(sellerId);
  }

  changeCompany(companyId: String){
    this.companySource.next(companyId);
  }

  constructor(private router: Router) { }

  login(userType: string,id:string): void {
    localStorage.setItem('userType', userType);
    this.router.navigate([this.getDashboardRoute(userType)]);
    this.userId=id;
    console.log(this.userId);

    switch(userType){
      case 'seller':this.changeSeller(id); break;
      case 'company':this.changeCompany(id); break;
    }
  }

  logout(): void {
    localStorage.removeItem('userType');
    this.router.navigate(['/login']);
  }

  getDashboardRoute(userType: string): string {
    switch (userType) {
      case 'seller':
        return '/coconut-dashboard';// Replace with your CoconutLot dashboard route
      case 'company':
        return '/company-dashboard'; // Replace with your Company dashboard route
      default:
        return '/login'; // Default to login page if userType is invalid
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userType');
  }

  getUserType(): string {
    const userType = localStorage.getItem('userType');
    return userType ? userType : ''; // Default to empty string if userType is null
  }

}
