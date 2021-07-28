import { User, UserCandidate } from './../../interfaces';
import { Action } from '@ngrx/store';


export enum UserActionTypes {
  LoadUser = '[User] Load User',
  Authenticated = '[User] Authenticated User',
  NotAuthenticated = '[User] NotAuthenticated User',
  AuthError = '[User] AuthError',
  Redirection = '[User] Redirection',
  Login = '[User] Login',
  Signup = '[User] Signup',
  Logout = '[User] Logout',
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

export class Redirection implements Action {
  readonly type = UserActionTypes.Redirection;
  constructor(public payload: string | null ) { }
}

export class Login implements Action {
  readonly type = UserActionTypes.Login;
  constructor(public payload: UserCandidate) { }
}

export class Signup implements Action {
  readonly type = UserActionTypes.Signup;
  constructor(public payload: UserCandidate) { }
}

export class Logout implements Action {
  readonly type = UserActionTypes.Logout;
}

export type UserActions
  = LoadUser
  | Authenticated
  | NotAuthenticated
  | AuthError
  | Redirection
  | Login
  | Signup
  | Logout;

