import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadInfoUserAction } from 'src/app/state/actions/user.actions';
import { selectDataUser } from 'src/app/state/selectors/user.selector';

@Component({
  selector: 'app-home-outlet',
  templateUrl: './home-outlet.component.html',
  styleUrls: ['./home-outlet.component.scss'],
})
export class HomeOutletComponent {
  constructor(private store: Store<any>, private router: Router) {}
  user = {};
  datauser$: Observable<any> = new Observable();

  ngOnInit(): void {
    this.store.dispatch(loadInfoUserAction());
  }
}
