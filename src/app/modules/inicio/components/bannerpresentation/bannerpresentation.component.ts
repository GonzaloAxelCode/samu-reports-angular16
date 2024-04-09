import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bannerpresentation',
  templateUrl: './bannerpresentation.component.html',
  styleUrls: ['./bannerpresentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerpresentationComponent {
  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}
  index = 0;

  private subscription: Subscription | undefined;

  showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.subscription = this.dialogs
      .open(content, {
        size: 's',

        closeable: true,
      })
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
