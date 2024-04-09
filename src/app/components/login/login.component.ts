import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginInAction } from 'src/app/state/actions/auth.actions';
import {
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
  constructor(private store: Store<any>) {}

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
    }
  }

  isFormValid(): boolean {
    return this.loginForm.valid;
  }
}
