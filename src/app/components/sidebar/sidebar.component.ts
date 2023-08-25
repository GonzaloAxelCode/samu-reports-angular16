import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearTokensLocalstorage } from 'src/app/services/localstorage/notification.service';
import { clearTokensAction } from 'src/app/state/actions/auth.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(private store: Store<any>) {}

  logOut() {
    clearTokensLocalstorage();
    this.store.dispatch(clearTokensAction({}));
  }
}
