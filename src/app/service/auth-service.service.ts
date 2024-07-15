import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  login(userType: string): void {
    localStorage.setItem('userType', userType);
    this.router.navigate([this.getDashboardRoute(userType)]);
  }

  logout(): void {
    localStorage.removeItem('userType');
    this.router.navigate(['/login']);
  }

  getDashboardRoute(userType: string): string {
    switch (userType) {
      case 'coconut_lot':
        return '/coconut-dashboard'; // Replace with your CoconutLot dashboard route
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
