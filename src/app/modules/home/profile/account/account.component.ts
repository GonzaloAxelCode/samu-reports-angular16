import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  TuiAppearance,
  tuiButtonOptionsProvider,
  TuiDialogService,
} from '@taiga-ui/core';
import { TUI_PROMPT, TuiPromptData } from '@taiga-ui/kit';
import { EMPTY, Observable, Subscription, switchMap } from 'rxjs';
import {
  activateAccountAction,
  changeEmailAction,
  changeEmailFail,
  deleteAccountAction,
  desactivateAccountAction,
} from 'src/app/state/actions/user.actions';
import {
  selectErrorsChangeEmail,
  selectUserData,
} from 'src/app/state/selectors/user.selector';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [
    tuiButtonOptionsProvider({
      shape: 'rounded',
      appearance: TuiAppearance.WhiteblockActive,
      size: 'm',
    }),
  ],
})
export class AccountComponent implements OnInit {
  openModalForPassword = false;
  private subscription: Subscription | undefined;
  errorPassword: string = 'adsdasd';
  errorEmail: string = 'dd';
  isSuccessChangeEmail: any = false;
  errorsChangeEmail$: Observable<any> = new Observable();
  dataUser$: Observable<any> = new Observable();
  passwordForm = new FormGroup({
    current_password: new FormControl('', Validators.required),
  });
  readonly emailFormControl = new FormControl('', []);

  emailForm = new FormGroup({
    email: this.emailFormControl,
  });
  ngOnInit(): void {
    this.dataUser$ = this.store.select(selectUserData);
    this.dataUser$.subscribe((data) => {
      if (data) {
        this.emailForm.patchValue({
          email: data.data?.email || '',
        });
        this.isSuccessChangeEmail = data?.emailChangedSuccessfully;
        this.errorPassword = data?.errors?.current_password || '';
        this.errorEmail = data?.errors?.new_email || '';
        if (this.isSuccessChangeEmail) {
          this.openModalForPassword = false;
          this.passwordForm.patchValue({
            current_password: '',
          });
        }
      }
    });
  }

  constructor(
    private store: Store<any>,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}
  onDesactivateAccount() {
    const data: TuiPromptData = {
      content:
        'Estas seguro de  <code> Desactivar </code> esta cuenta activa?  ',
      yes: 'Confirmar',
      no: 'Cancelar',
    };
    this.dialogs
      .open<boolean>(TUI_PROMPT, {
        label: 'Desactivar Cuenta',
        size: 's',
        data,
      })
      .pipe(
        switchMap(
          (response: any) =>
            response && this.store.dispatch(desactivateAccountAction())
        )
      )
      .subscribe();
  }
  onDeleteAccount() {
    const data: TuiPromptData = {
      content:
        'Estas seguro de  <code> Eliminar </code> esta cuenta permanentemente?  ',
      yes: 'Confirmar',
      no: 'Cancelar',
    };
    this.dialogs
      .open<boolean>(TUI_PROMPT, {
        label: 'Eliminar Cuenta',
        size: 's',
        data,
      })
      .pipe(
        switchMap(
          (response: any) =>
            response && this.store.dispatch(deleteAccountAction())
        )
      )
      .subscribe();
  }
  onSubmitActivateAccount() {
    if (this.emailForm.valid) {
      this.store.dispatch(
        activateAccountAction({ email: this.emailForm.value.email || '' })
      );
    }
  }

  onChangeEmail() {
    if (this.emailForm.valid) {
      this.store.dispatch(
        changeEmailAction({
          current_password: this.passwordForm.value.current_password || '',
          new_email: this.emailForm.value.email || '',
          re_new_email: this.emailForm.value.email || '',
        })
      );
    }
  }

  showDialogUpdateEmail(): void {
    this.openModalForPassword = true;
  }
}
