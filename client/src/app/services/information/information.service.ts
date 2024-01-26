import { Injectable } from '@angular/core';
import { IInformation } from '../../types/information';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }

  getAllInformation(): Observable<IInformation[]> {
    return this.http.get<IInformation[]>(`${environment.apiUrl}/information`);
  }

  getInformationById(id: string): Observable<IInformation> {
    return this.http.get<IInformation>(`${environment.apiUrl}/information/${id}`);
  }
}
