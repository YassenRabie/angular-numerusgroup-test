import { Injectable } from '@angular/core';
import { IInformation } from '../../types/information';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:4000/information'

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }

  getAllInformation(): Observable<IInformation[]> {
    return this.http.get<IInformation[]>(URL);
  }

  getInformationById(id: string): Observable<IInformation> {
    return this.http.get<IInformation>(`${URL}/${id}`);
  }
}
