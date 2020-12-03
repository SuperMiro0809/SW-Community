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

  constructor(private http: HttpClient) { }

  get loogedIn() {
    this.getUserStatus();
    return !!this.currentUser;
  }

  getUserStatus(): Observable<any> {
    const url = `${environment.apiUrl}/users/profile`;

    return this.http.get<any>(url, { withCredentials: true }).pipe(
      tap(((user) => this.currentUser = user)),
      catchError(() => { this.currentUser = null; return of(null); })
    )
  }

  register(data): Observable<any> {
    const url = `${environment.apiUrl}/users/register`;

    return this.http.post(url, data, { withCredentials: true }).pipe(
      tap((user) => this.currentUser = user)
    );
  }

  login(data): Observable<any> {
    const url = `${environment.apiUrl}/users/login`;

    return this.http.post(url, data, { withCredentials: true }).pipe(
      tap((user) => this.currentUser = user)
    );
  }

  getProfile(): Observable<any> {
    const url = `${environment.apiUrl}/users/profile`;

    return this.http.get<any>(url, { withCredentials: true });
  }
}
