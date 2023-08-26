import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TuiAlertService } from '@taiga-ui/core';
import { Observable } from 'rxjs';
import { NotificationState } from 'src/app/models/notification.model';
import { stopNotificationAction } from 'src/app/state/actions/notification.actions';
import { selectNotification } from 'src/app/state/selectors/notification.selectors';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements OnInit {
  constructor(
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    private store: Store<any>
  ) {}

  showNotification$: Observable<any> = new Observable();

  ngOnInit(): void {
    this.showNotification$ = this.store.select(selectNotification);

    this.showNotification$.subscribe((state: NotificationState) => {
      if (state.show) {
        this.alerts
          .open(state.message, { label: state.label, status: state.status })
          .subscribe();

        setTimeout(() => {
          this.store.dispatch(stopNotificationAction({}));
        }, 3000);
      }
    });
  }
}
