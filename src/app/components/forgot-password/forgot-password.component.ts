import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { resetPasswordAction } from 'src/app/state/actions/auth.actions';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass'],
})
export class ForgotPasswordComponent {
  constructor(private store: Store<any>, private router: Router) {}
  @Output() eventClickChangeTab = new EventEmitter<number>();
  onClickRedirectLogin(): void {
    this.eventClickChangeTab.emit(0);
  }
  onClickRedirectRegister(): void {
    this.eventClickChangeTab.emit(1);
  }
  readonly emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  forgotPasswordForm = new FormGroup({
    email: this.emailFormControl,
  });

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      this.store.dispatch(
        resetPasswordAction({
          email: this.forgotPasswordForm.value.email || '',
        })
      );
    }
  }
  isFormValid(): boolean {
    return this.forgotPasswordForm.valid;
  }
}
