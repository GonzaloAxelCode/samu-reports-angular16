import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Subscription } from 'rxjs';
import { selectAuthenticated } from 'src/app/state/selectors/auth.selectors';

@Component({
  selector: 'app-bannerpresentation',
  templateUrl: './bannerpresentation.component.html',
  styleUrls: ['./bannerpresentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerpresentationComponent {
  activeItemIndex = 0;
  isAuthenticated: any = false;
  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private router: Router,
    private store: Store<any>
  ) {
    this.store
      .pipe(select(selectAuthenticated))
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated || false;
      });
  }
  index = 0;

  private subscription: Subscription | undefined;

  ngOnInit() {
    console.log(this.activeItemIndex);
  }

  showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    if (this.isAuthenticated) {
      this.router.navigate(['/home']);
    } else {
      this.subscription = this.dialogs
        .open(content, {
          size: 's',

          closeable: true,
        })
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onTabClick(index: any) {
    this.activeItemIndex = index;
  }
}
