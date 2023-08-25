import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { checkTokenAction } from './state/actions/auth.actions';
import {
  selectAuthenticated,
  selectCheckAuthenticateLoading,
} from './state/selectors/auth.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private store: Store<any>
  ) {}
  title = 'angular-samu';
  show = true;

  isAuthenticated$: Observable<any> = new Observable();
  isLoadingCheckAuthenticate$: Observable<any> = new Observable();
  ngOnInit(): void {
    this.store.dispatch(checkTokenAction());
    this.isAuthenticated$ = this.store.select(selectAuthenticated);
    this.isLoadingCheckAuthenticate$ = this.store.select(
      selectCheckAuthenticateLoading
    );

    this.isAuthenticated$.subscribe((data) => {
      if (data) {
        this.show = data;
      }
    });

    this.primengConfig.ripple = true;
  }
}
