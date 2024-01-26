import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IArtical } from '../../types/artical';

@Injectable({
  providedIn: 'root'
})
export class ArticalService {

  constructor(private http: HttpClient) { }

  getAllArticals(): Observable<IArtical[]> {
    return this.http.get<IArtical[]>(`${environment.apiUrl}/articals`);
  }

  getArticalById(id: string): Observable<IArtical> {
    return this.http.get<IArtical>(`${environment.apiUrl}/articals/${id}`);
  }
}
