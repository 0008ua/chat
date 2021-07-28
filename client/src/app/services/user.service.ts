import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserCandidate } from '../interfaces';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { redirectionUrl, State } from '../store/reducers/user.reducer';
import { Router } from '@angular/router';
import { Redirection } from '../store/actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private store: Store<State>,
    private router: Router,
  ) {
    this.store.select(redirectionUrl)
      .subscribe((url) => {
        if (url) {
          this.router.navigateByUrl(url);
          this.store.dispatch(new Redirection(null));
        }
      });
  }

  loadUser(): Observable<User | null> {
    // return of ({_id: '2344562546', login: 'test'})
    const token = this.cookieService.get('chatClient');
    const helper = new JwtHelperService();
    if (token && !helper.isTokenExpired(token) ) {
      const { user } = helper.decodeToken(token);
      console.log('user', user)
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

  logout(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<string>(
      'api/user/logout',
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
