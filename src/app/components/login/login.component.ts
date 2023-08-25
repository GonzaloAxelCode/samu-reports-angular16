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
  errorDetail: string | undefined;
  readonly emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  readonly passwordControl = new FormControl('', Validators.required);

  testForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  errorsAuth$: Observable<any> = new Observable();
  isLoadingLogin$: Observable<any> = new Observable();
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.isLoadingLogin$ = this.store.select(selectLoadingLogin);
    this.errorsAuth$ = this.store.select(selectErrorsAuth);

    this.errorsAuth$.subscribe((data) => {
      if (data) {
        this.errorDetail = data?.detail || false;
      }
    });
  }

  onSubmit(): void {
    if (this.testForm.valid) {
      const formData: any = this.testForm.value;
      this.store.dispatch(loginInAction(formData));
      console.log(formData);
    }
  }

  isFormValid(): boolean {
    return this.testForm.valid;
  }
}
