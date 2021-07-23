import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { State } from '../../store/reducers';

import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
    private store: Store<State>,
  ) { }

  // Prevents fetching lazy loading modules
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select('user').pipe(
        map((storeState) => {
          if (!storeState.user) {
            console.log('storeState', storeState);

            this.router.navigateByUrl('/auth/signin');
            return false;
          }
          return true;
        }),
        take(1),
    );
  }

  // If lazy loadnig module already fetched and user logged out
  // this guard prevents to activate module
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select('user').pipe(
        map((storeState) => {
          if (!storeState.user) {
            this.router.navigateByUrl('/auth/signin');
            return false;
          }
          return true;
        }),
        // take(1),
    );
  }
}
