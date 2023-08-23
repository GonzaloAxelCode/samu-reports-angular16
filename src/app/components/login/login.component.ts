import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginInAction } from 'src/app/state/actions/auth.actions';
import { selectLoadingLogin } from 'src/app/state/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: { '[class._cypress]': 'isCypress' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  readonly testForm = new FormGroup({
    email: new FormControl('mail@mail.ru'),
    password: new FormControl('password', Validators.required),
  });

  isLoadingLogin$: Observable<any> = new Observable();
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.isLoadingLogin$ = this.store.select(selectLoadingLogin);
  }
  onLogin() {
    const email = this.testForm.get('email')?.value as string;
    const password = this.testForm.get('password')?.value as string;
    this.store.dispatch(loginInAction({ email, password }));
  }
}
