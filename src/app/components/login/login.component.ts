import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginInAction } from 'src/app/state/actions/auth.actions';
import {
  selectAuthenticated,
  selectErrorsAuth,
  selectLoadingLogin,
} from 'src/app/state/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: { '[class._cypress]': 'isCypress' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @Output() eventClickChangeTab = new EventEmitter<number>();
  onClickRedirectLogin(): void {
    this.eventClickChangeTab.emit(1);
  }
  onClickRedirectForgotForm(): void {
    this.eventClickChangeTab.emit(2);
  }
  isAuthSuccess: boolean = false;
  constructor(private store: Store<any>, private router: Router) {}

  errorsAuth$: Observable<any> = new Observable();
  isLoadingLogin$: Observable<any> = new Observable();
  errorDetail: string | undefined;
  readonly passwordFormControl = new FormControl('', Validators.required);
  readonly emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  loginForm = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });

  ngOnInit(): void {
    this.isLoadingLogin$ = this.store.select(selectLoadingLogin);
    this.errorsAuth$ = this.store.select(selectErrorsAuth);

    this.errorsAuth$.subscribe((data) => {
      if (data) {
        this.errorDetail = data?.detail || '';
      }
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData: any = this.loginForm.value;

      this.store.dispatch(loginInAction(formData));
      this.store
        .pipe(select(selectAuthenticated))
        .subscribe((isAuthenticated) => {
          this.isAuthSuccess = isAuthenticated || false;
          if (isAuthenticated) {
            this.router.navigate(['/home']);
          }
        });

      this.isAuthSuccess && this.router.navigate(['/home']);
    }
  }

  isFormValid(): boolean {
    return this.loginForm.valid;
  }
}
