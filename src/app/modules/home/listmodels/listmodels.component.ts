import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAllModels } from 'src/app/state/actions/uploadcsv.actions';
import {
  selectAllModels,
  selectLoadingAllModels,
} from 'src/app/state/selectors/upload.selectors';

@Component({
  selector: 'app-listmodels',
  templateUrl: './listmodels.component.html',
  styleUrls: ['./listmodels.component.scss'],
})
export class ListmodelsComponent {
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
}
