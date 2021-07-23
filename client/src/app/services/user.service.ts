import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserCandidate } from '../interfaces';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) { }

  loadUser(): Observable<User | null> {
    // return of ({_id: '2344562546', login: 'test'})
    const cookie = this.cookieService.get('chatClient');
    if (cookie) {
      const helper = new JwtHelperService();
      const user = helper.decodeToken(cookie).sub;
      return of(user);
    }
    return of(null);
  }

  login(userCandidate: UserCandidate): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<string>(
      'api/user/login',
      userCandidate,
      httpOptions,
    )
  }

  signup(userCandidate: UserCandidate): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<string>(
      'api/user/signup',
      userCandidate,
      httpOptions,
    )
  }

  matchPassword(abstractControl: AbstractControl): ValidationErrors | null {
    const password = abstractControl.get('password').value;
    const passwordConfirm = abstractControl.get('passwordConfirm').value;
    if (password === passwordConfirm) {
      abstractControl.get('passwordConfirm').setErrors(null);
      return null;
    } else {
      /**
       * set error to 'passwordConfirm' element
       */

      abstractControl.get('passwordConfirm').setErrors({ mismatch: true });
      /**
       * and don't set error (null) to formGroup
       */
      return null;
    }
  }
}
