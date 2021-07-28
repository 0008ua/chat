import { UserService } from './../../services/user.service';
import * as fromUserActions from './../actions/user.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';



@Injectable()
export class UserEffects {

  @Effect()
  loadUser: Observable<Action | Action[]> = this.actions$.pipe(
    ofType(fromUserActions.UserActionTypes.LoadUser),
    map((action: fromUserActions.LoadUser) => null),
    switchMap((_) => this.userService.loadUser().pipe(
      switchMap((user) => {
        let actions: Action[];
        if (user) {
          // User logged in
          actions = [new fromUserActions.Authenticated( user )];
        } else {
          // User not logged in
          actions = [new fromUserActions.NotAuthenticated()];
        }
          return actions;
      }),
      catchError((err) => [new fromUserActions.AuthError(err), new fromUserActions.NotAuthenticated()]),
    )),
  );

  @Effect()
  logout: Observable<Action | Action[]> = this.actions$.pipe(
    ofType(fromUserActions.UserActionTypes.Logout),
    switchMap(() => this.userService.logout().pipe(
      map((_) => new fromUserActions.Redirection('/auth/signin')),
      catchError((err) => of(new fromUserActions.AuthError(err))),
    )),
  );

  @Effect()
  login: Observable<Action | Action[]> = this.actions$.pipe(
    ofType(fromUserActions.UserActionTypes.Login),
    map((action: fromUserActions.Login) => action.payload),
    switchMap((payload) => this.userService.login(payload).pipe(
      map((_) => new fromUserActions.Redirection('/')),
      catchError((err) => of(new fromUserActions.AuthError(err))),
    )),
  );

  @Effect()
  signup: Observable<Action | Action[]> = this.actions$.pipe(
    ofType(fromUserActions.UserActionTypes.Signup),
    map((action: fromUserActions.Signup) => action.payload),
    switchMap((payload) => this.userService.signup(payload).pipe(
      map((_) => new fromUserActions.Redirection('/')),
      catchError((err) => of(new fromUserActions.AuthError(err))),
    )),
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    ) {}

}
