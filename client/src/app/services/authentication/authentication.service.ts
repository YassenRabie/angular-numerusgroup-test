import { Injectable } from '@angular/core';
import { User } from '../../models/login';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // HTTP options for setting content type to 'application/json'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /**
  * Authenticates a user by making a login request.
  * @param user - User object containing login credentials.
  * @returns Observable containing user details on successful login.
  */
  login(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user/login`, user, this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error);
      })
    );
  }
}
