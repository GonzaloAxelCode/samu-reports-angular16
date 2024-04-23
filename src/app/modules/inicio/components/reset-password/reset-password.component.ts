import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  resetConfirmationPasswordAction,
  resetPasswordAction,
} from 'src/app/state/actions/auth.actions';
import {
  selectAuth,
  selectAuthState,
} from 'src/app/state/selectors/auth.selectors';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass'],
})
export class ResetPasswordComponent {
  constructor(private store: Store<any>, private route: ActivatedRoute) {}
  token: string = '';
  uid: string = '';
  errorNewPassword: string = '';
  errorReNewPassword: string = '';
  dataAuth$: Observable<any> = new Observable();
  passwordResetForm = new FormGroup({
    new_password: new FormControl('', Validators.required),
    re_new_password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.uid = params['uid'];
    });

    // Obtener el valor de 'token'
    this.route.params.subscribe((params) => {
      this.token = params['token'];
    });

    this.dataAuth$ = this.store.select(selectAuth);
    this.dataAuth$.subscribe((data) => {
      if (data) {
        this.errorNewPassword = data?.errors?.new_password || '';
        this.errorReNewPassword = data?.errors?.re_new_password || '';
      }
    });
  }

  onResetPassword() {
    if (this.passwordResetForm.valid) {
      this.store.dispatch(
        resetConfirmationPasswordAction({
          uid: this.uid || '',
          token: this.token || '',
          new_password: this.passwordResetForm.value.new_password || '',
          re_new_password: this.passwordResetForm.value.re_new_password || '',
        })
      );
    }
  }
}
