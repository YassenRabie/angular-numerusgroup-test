import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INavigationItem } from '../../types/navigation';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isMenuOpenSubject = new BehaviorSubject<boolean>(false);
  isMenuOpen$ = this.isMenuOpenSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkScreenSize();
  }

  /**
  * Fetches navigation data.
  * @returns Observable containing an array of navigation items.
  */
  getNavigation(): Observable<INavigationItem[]> {
    return this.http.get<INavigationItem[]>(`${environment.apiUrl}/navigation`);
  }

  // Toggle the menu state
  toggleMenu(): void {
    this.isMenuOpenSubject.next(!this.isMenuOpenSubject.value);
  }

  // Check if the menu is currently open
  isMenuOpen(): boolean {
    return this.isMenuOpenSubject.value;
  }

  // Check the screen size and set the initial menu state
  private checkScreenSize(): void {
    const isSmallScreen = window.innerWidth > 1080;
    this.isMenuOpenSubject.next(!isSmallScreen);
  }
}
