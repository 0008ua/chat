import { SocketService } from './socket.service';
import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserCandidate } from '../interfaces';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getUser, redirectionUrl } from '../store/reducers/user.reducer';
import { Router } from '@angular/router';
import { Redirection } from '../store/actions/user.actions';
import { State } from '../store/reducers';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    user: User;

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
        private store: Store<State>,
        private router: Router,
        private socketService: SocketService,
    ) {
        this.store.select(getUser)
            .subscribe((user) => this.user = user);

        this.store.select(redirectionUrl)
            .subscribe((url) => {
                if (url) {
                    this.router.navigateByUrl(url);
                    this.store.dispatch(new Redirection(null));
                }
            });
    }

    loadUser(): Observable<User | null> {
        const token = this.cookieService.get('chatClient');
        const helper = new JwtHelperService();
        if (token && !helper.isTokenExpired(token) ) {
            const { user } = helper.decodeToken(token);
            return of(user);
        }
        return of(null);
    }

    loginAnonymous(name: Pick<UserCandidate, 'name'>): Observable<void> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post<null>(
            'api/user/loginAnonymous',
            {name},
            httpOptions,
        );
    }

    login(userCandidate: UserCandidate): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        const login$ = this.http.post<null>(
            'api/user/login',
            userCandidate,
            httpOptions,
        );

        if (this.user?.role === 'guest') {
            this.logout().pipe(
                switchMap((_) => login$),
            );
        }

        return login$;
    }

    signup(userCandidate: UserCandidate): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        const signup$ = this.http.post<null>(
            'api/user/signup',
            userCandidate,
            httpOptions,
        );

        if (this.user?.role === 'guest') {
            this.logout().pipe(
                switchMap((_) => signup$),
            );
        }

        return signup$;
    }


    logout(): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get<null>(
            'api/user/logout',
            httpOptions,
        );
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

    // localGuest(): Observable<string> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
    //         }),
    //     };

    //     return this.http.post<string>(
    //         'api/user/guest',
    //         null,
    //         httpOptions,
    //     );
    // }
}
