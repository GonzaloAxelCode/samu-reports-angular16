import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { Observable } from 'rxjs';
import {
  selectAuthenticated,
  selectCheckAuthenticateLoading,
} from '../state/selectors/auth.selectors';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  isAuthenticated$: Observable<any>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isAuthenticated$ = this.store.select(selectAuthenticated);
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated$;
  }
}
