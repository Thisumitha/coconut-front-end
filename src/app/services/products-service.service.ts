import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private baseUrl = 'http://192.168.1.112:5000';

  private productSource = new BehaviorSubject<any>(null);
  currentProduct = this.productSource.asObservable();

  changeProduct(product: any){
    this.productSource.next(product);
  }

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'/products');
  }

  getFeatures(id:any): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'/features/'+id);
  }

}
