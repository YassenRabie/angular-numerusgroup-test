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

  /**
  * Fetches all information data.
  * @returns Observable containing an array of information.
  */
  getAllInformation(): Observable<IInformation[]> {
    return this.http.get<IInformation[]>(`${environment.apiUrl}/information`);
  }

  /**
  * Fetches information data by its ID.
  * @param id - ID of the information to be fetched.
  * @returns Observable containing the details of the information.
  */
  getInformationById(id: string): Observable<IInformation> {
    return this.http.get<IInformation>(`${environment.apiUrl}/information/${id}`);
  }
}
