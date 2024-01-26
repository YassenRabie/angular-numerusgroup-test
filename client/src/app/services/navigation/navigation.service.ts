import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INavigationItem } from '../../types/navigation';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) { }

  /**
 * Fetches navigation data.
 * @returns Observable containing an array of navigation items.
 */
  getNavigation(): Observable<INavigationItem[]> {
    return this.http.get<INavigationItem[]>(`${environment.apiUrl}/navigation`);
  }
}
