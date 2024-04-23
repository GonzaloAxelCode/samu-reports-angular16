import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearTokensAction } from 'src/app/state/actions/auth.actions';

@Component({
  selector: 'app-sidebar-home',
  templateUrl: './sidebar-home.component.html',
  styleUrls: ['./sidebar-home.component.scss'],
})
export class SidebarHomeComponent {
  constructor(private store: Store<any>, private router: Router) {}

  onLogOut() {
    this.store.dispatch(clearTokensAction());
    this.router.navigate(['/']);
  }
}
