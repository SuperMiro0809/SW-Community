import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { IUser } from '../shared/interfaceses'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: IUser | null;

  constructor(private http: HttpClient) {

  }
  get isLogged(): boolean { 
    return !!this.currentUser; 
  }

  getUserStatus(): Observable<any> {
    const url = `${environment.apiUrl}/users/profile`;

    return this.http.get<any>(url, { withCredentials: true }).pipe(
      tap(((user: IUser) => this.currentUser = user)),
      catchError(() => { this.currentUser = null; return of(null); })
    )
  }

  register(data): Observable<any> {
    const url = `${environment.apiUrl}/users/register`;

    return this.http.post(url, data, { withCredentials: true }).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

  login(data): Observable<any> {
    const url = `${environment.apiUrl}/users/login`;

    return this.http.post(url, data, { withCredentials: true }).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

  logout(): Observable<any> {
    const url = `${environment.apiUrl}/users/logout`;

    return this.http.get(url, { withCredentials: true }).pipe(
      tap(() => this.currentUser = null)
    )
  }

  getProfile(): Observable<IUser> {
    const url = `${environment.apiUrl}/users/profile`;

    return this.http.get<IUser>(url, { withCredentials: true });
  }

  getCart(): Observable<any> {
    const url = `${environment.apiUrl}/users/profile/cart`;

    return this.http.get(url, { withCredentials: true });
  }

  removeFromCart(id) {
    const url = `${environment.apiUrl}/users/profile/cart/${id}`;

    return this.http.get(url, { withCredentials: true });
  }

  checkout(ids) {
    const url = `${environment.apiUrl}/users/cart/checkout`;

    return this.http.put(url, ids, { withCredentials: true });
  }
}
