import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  TuiAppearance,
  tuiButtonOptionsProvider,
  TuiDialogService,
} from '@taiga-ui/core';
import { Observable } from 'rxjs';
import { changePasswordAction } from 'src/app/state/actions/user.actions';
import { selectUserData } from 'src/app/state/selectors/user.selector';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    tuiButtonOptionsProvider({
      shape: 'rounded',
      appearance: TuiAppearance.WhiteblockActive,
      size: 'm',
    }),
  ],
})
export class PasswordComponent {
  constructor(
    private store: Store<any>,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}
  dataUser$: Observable<any> = new Observable();
  errorNewPassword: string = '';
  errorReNewPassword: string = '';
  errorCurrentPassword: string = '';

  passwordChangeForm = new FormGroup({
    current_password: new FormControl('', Validators.required),
    new_password: new FormControl('', Validators.required),
    re_new_password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.dataUser$ = this.store.select(selectUserData);
    this.dataUser$.subscribe((data) => {
      if (data) {
        this.errorNewPassword = data?.errors?.new_password || '';
        this.errorReNewPassword = data?.errors?.re_new_password || '';
        this.errorCurrentPassword = data?.errors?.current_password || '';
      }
    });
  }

  onChangePassword() {
    if (this.passwordChangeForm.valid) {
      this.store.dispatch(
        changePasswordAction({
          current_password:
            this.passwordChangeForm.value.current_password || '',
          new_password: this.passwordChangeForm.value.new_password || '',
          re_new_password: this.passwordChangeForm.value.re_new_password || '',
        })
      );
    }
  }
}
