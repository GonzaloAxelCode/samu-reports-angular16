import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearTokensAction } from 'src/app/state/actions/auth.actions';
import { loadAllModels } from 'src/app/state/actions/uploadcsv.actions';
import {
  selectAllModels,
  selectLoadingAllModels,
} from 'src/app/state/selectors/upload.selectors';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { loadInfoUserAction } from 'src/app/state/actions/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<any>, private router: Router) {}

  isLoadingGetAllModels$: Observable<any> = new Observable();
  getDataModels$: Observable<any> = new Observable();
  models: any = [];

  ngOnInit(): void {
    this.store.dispatch(loadAllModels());
    this.isLoadingGetAllModels$ = this.store.select(selectLoadingAllModels);
    this.getDataModels$ = this.store.select(selectAllModels);
    this.getDataModels$.subscribe((data) => {
      this.models = data;
    });
  }

  logOut() {
    this.store.dispatch(clearTokensAction());
    this.router.navigate(['/']);
  }
}
