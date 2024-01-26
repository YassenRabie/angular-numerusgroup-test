import { Injectable } from '@angular/core';
import { User } from '../../models/login';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User> {
    // return this.http.post<User>(`${environment.apiUrl}/user/login`, user, this.httpOptions);

    return this.http.post<User>(`${environment.apiUrl}/user/login`, user, this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error);
      })
    );

  }
}
