import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { State } from '../store/reducers';

import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<State>,

  ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree>| Promise<boolean | UrlTree>| boolean | UrlTree {
    return this.store.select('user').pipe(
        map((storeState) => {
          if (storeState.user) {
            this.router.navigateByUrl('/');
            return false;
          }
          return true;
        }),
        // take(1),
    );
  }
}
