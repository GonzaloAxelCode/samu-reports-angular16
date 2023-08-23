import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RegisterType } from 'src/app/models/auth.model';
import { registerInAction } from 'src/app/state/actions/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: { '[class._cypress]': 'isCypress' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  readonly testForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    re_password: new FormControl('', Validators.required),
  });
  isLoadingResgister$: Observable<any> = new Observable();
  constructor(private store: Store<any>) {}

  onRegister() {
    const userData: RegisterType = {
      firstname: this.testForm.get('firstname')?.value as string,
      lastname: this.testForm.get('lastname')?.value as string,
      nickname: this.testForm.get('username')?.value as string,
      email: this.testForm.get('email')?.value as string,
      password: this.testForm.get('password')?.value as string,
      re_password: this.testForm.get('re_password')?.value as string,
    };
    this.store.dispatch(registerInAction(userData));
  }
}
