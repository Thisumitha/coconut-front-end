import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private baseUrl = 'http://localhost:3000';

  private sellerSource = new BehaviorSubject<any>(null);
  currentSeller = this.sellerSource.asObservable();

  private companySource = new BehaviorSubject<any>(null);
  currentCompany = this.sellerSource.asObservable();

  changeSeller(sellerId: String){
    this.sellerSource.next(sellerId);
  }

  constructor(private http: HttpClient){}

  login(username: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  }

  createCoconutLot(coconutLotData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/coconut`, coconutLotData);
  }

  getCoconutLots(sellerId:string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/coconut/seller/${sellerId}`);
  }

  updateCoconutLot(id: string, updates: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/coconut/${id}`, updates);
  }

  createCompany(companyData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/company`, companyData);
  }

  getAllCompanies(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/order`);
  }

  updateCompany(id: string, updates: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/company/${id}`, updates);
  }

  deleteCompany(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/company/${id}`);
  }

}
