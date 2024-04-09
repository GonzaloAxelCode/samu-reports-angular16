import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppState } from '../state/app.state';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select((state) => state.Auth.isAuthenticated),
      map((isAuthenticated: boolean | undefined) => {
        if (isAuthenticated === undefined) {
          return false;
        }
        if (!isAuthenticated) {
          this.router.navigate(['/']);
        }
        return isAuthenticated;
      }),
      take(1)
    );
  }
}
