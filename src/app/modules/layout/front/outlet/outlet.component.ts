import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectAuthenticated,
  selectCheckAuthenticateLoading,
} from 'src/app/state/selectors/auth.selectors';

@Component({
  selector: 'app-layout-front-outlet',
  templateUrl: './outlet.component.html',
})
export class LayoutFrontOutletComponent {
  constructor(private store: Store<any>) {}
  isAuthenticated$: Observable<any> = new Observable();

  isLoadingCheckAuthenticate$: Observable<any> = new Observable();
  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(selectAuthenticated);
    this.isLoadingCheckAuthenticate$ = this.store.select(
      selectCheckAuthenticateLoading
    );
  }
}
