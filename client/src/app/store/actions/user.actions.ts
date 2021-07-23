import { User } from './../../interfaces';
import { Action } from '@ngrx/store';


export enum UserActionTypes {
  LoadUser = '[User] Load User',
  Authenticated = '[User] Authenticated User',
  NotAuthenticated = '[User] NotAuthenticated User',
  AuthError = '[User] AuthError',
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;
}

export class Authenticated implements Action {
  readonly type = UserActionTypes.Authenticated;
  constructor(public payload: User) { }
}

export class NotAuthenticated implements Action {
  readonly type = UserActionTypes.NotAuthenticated;
}

export class AuthError implements Action {
  readonly type = UserActionTypes.AuthError;
  constructor(public payload: any) { }
}

export type UserActions
  = LoadUser
  | Authenticated
  | NotAuthenticated
  | AuthError;
