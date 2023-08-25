import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerInAction } from 'src/app/state/actions/auth.actions';
import {
  selectErrorsAuth,
  selectLoadingRegister,
} from 'src/app/state/selectors/auth.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: { '[class._cypress]': 'isCypress' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  errorEmail: string | undefined;
  errorNickname: string | undefined;
  errorRePassword: string | undefined;
  errorPassword1: string | undefined;
  errorPassword2: string | undefined;
  errorPassword3: string | undefined;
  non_field_errors: string | undefined;
  readonly emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nicknameControl = new FormControl('', Validators.required);

  passwordControl = new FormControl('', Validators.required);

  rePasswordControl = new FormControl('', Validators.required);

  firstnameControl = new FormControl('', Validators.required);

  lastnameControl = new FormControl('', Validators.required);

  testForm = new FormGroup({
    nickname: this.nicknameControl,
    email: this.emailControl,
    password: this.passwordControl,
    re_password: this.rePasswordControl,
    firstname: this.firstnameControl,
    lastname: this.lastnameControl,
  });

  isLoadingRegister$: Observable<any> = new Observable();
  errorsAuth$: Observable<any> = new Observable();

  constructor(private store: Store<any>) {}
  ngOnInit(): void {
    this.isLoadingRegister$ = this.store.select(selectLoadingRegister);
    this.errorsAuth$ = this.store.select(selectErrorsAuth);

    this.errorsAuth$.subscribe((data) => {
      if (data) {
        this.errorNickname = data?.nickname?.[0] || false;
        this.errorEmail = data?.email?.[0] || false;
        this.errorRePassword = data?.re_password?.[0] || false;
        this.errorPassword1 = data?.password?.[0] || false;
        this.errorPassword2 = data?.password?.[1] || false;
        this.errorPassword3 = data?.password?.[2] || false;
        this.non_field_errors= data?.non_field_errors?.[0] || false
      }
    });
  }

  onSubmit(): void {
    this.errorEmail = '';
    this.errorNickname = '';
    this.errorRePassword = '';
    this.errorPassword1 = '';
    this.errorPassword2 = '';
    this.errorPassword3 = '';

    if (this.testForm.valid) {
      const formData: any = this.testForm.value;
      this.store.dispatch(registerInAction(formData));
      console.log(formData);
    }
  }

  isFormValid(): boolean {
    return this.testForm.valid;
  }
}
