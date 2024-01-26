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

  /**
  * Fetches all articles.
  * @returns Observable containing an array of articles.
  */
  getAllArticals(): Observable<IArtical[]> {
    return this.http.get<IArtical[]>(`${environment.apiUrl}/articals`);
  }

  /**
  * Fetches an article by its ID.
  * @param id - ID of the article to be fetched.
  * @returns Observable containing the details of the article.
  */
  getArticalById(id: string): Observable<IArtical> {
    return this.http.get<IArtical>(`${environment.apiUrl}/articals/${id}`);
  }
}
