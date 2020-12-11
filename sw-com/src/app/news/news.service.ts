import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INew } from '../shared/interfaceses';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllNews(limit): Observable<INew[]> {
    const url = `${environment.apiUrl}/news/posts?limit=${limit}`;

    return this.http.get<INew[]>(url, { withCredentials: true });
  }

  getNewById(id): Observable<INew> {
    const url = `${environment.apiUrl}/news/posts/${id}`;

    return this.http.get<INew>(url, { withCredentials: true });
  }

  createNew(data): Observable<INew> {
    const url = `${environment.apiUrl}/news/create`;

    return this.http.post<INew>(url, data, { withCredentials: true });
  }

  deleteNewById(id): Observable<any> {
    const url = `${environment.apiUrl}/news/posts/${id}`;

    return this.http.delete<any>(url, { withCredentials: true });
  }

}
