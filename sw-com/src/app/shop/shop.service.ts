import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../shared/interfaceses'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    const url = `${environment.apiUrl}/shop/products`;

    return this.http.get<IProduct[]>(url, { withCredentials: true });
  }

  getProductById(id): Observable<IProduct> {
    const url = `${environment.apiUrl}/shop/products/${id}`;

    return this.http.get<IProduct>(url, { withCredentials: true });
  }

  createProduct(data): Observable<IProduct> {
    const url = `${environment.apiUrl}/shop/create`;

    return this.http.post<IProduct>(url, data, { withCredentials: true });
  }

  buyProducts(): Observable<IProduct | IProduct[]> {
    const url = `${environment.apiUrl}/shop/buy`;

    return this.http.get<IProduct | IProduct[]>(url, { withCredentials: true });
  }
}
