import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { TuiFileLike, TuiSortCountriesPipe } from '@taiga-ui/kit';
import { finalize, map, Observable, of, Subject, switchMap, timer } from 'rxjs';
import { UserProfile } from 'src/app/models/user.model';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';

import {
  updateBirthdateAction,
  updateFirstNameAction,
  updateLastNameAction,
  updateNicknameAction,
  updatePhoneNumberAction,
  updatePhotoAction,
} from 'src/app/state/actions/user.actions';
import { selectDataUser } from 'src/app/state/selectors/user.selector';
import { convertirFecha } from 'src/app/utils/convert-date';
import { formatFecha } from 'src/app/utils/format-date';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      shape: 'rounded',
      appearance: TuiAppearance.Outline,
      size: 'm',
    }),
  ],
})
export class EditPerfilComponent {
  datauser$: Observable<any> = new Observable();
  user: UserProfile = {
    email: '',
    nickname: '',
    first_name: '',
    last_name: '',
    photo_url: '',
    desactivate_account: false,
    birthdate: null,
    phone_number: '',
  };

  nicknameForm = new FormGroup({ nickname: new FormControl('') });

  phoneNumberForm = new FormGroup({
    phone_number: new FormControl('', Validators.minLength(9)),
  });

  firstNameForm = new FormGroup({
    first_name: new FormControl(''),
  });
  lastNameForm = new FormGroup({
    last_name: new FormControl(''),
  });

  readonly dateBirthDayForm = new FormGroup({
    birthdate: new FormControl(new TuiDay(24, 1, 1)),
  });

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.datauser$ = this.store.select(selectDataUser);
    this.datauser$.subscribe((data) => {
      this.user = data;
      this.nicknameForm.patchValue({
        nickname: this.user?.nickname || '',
      });
      this.phoneNumberForm.patchValue({
        phone_number: this.user?.phone_number,
      });
      this.firstNameForm.patchValue({
        first_name: this.user?.first_name,
      });
      this.lastNameForm.patchValue({
        last_name: this.user?.last_name,
      });
      this.dateBirthDayForm.patchValue({
        birthdate: new TuiDay(
          convertirFecha(this.user?.birthdate || '').year || 24,
          convertirFecha(this.user?.birthdate || '').month || 1,
          convertirFecha(this.user?.birthdate || '').day || 1
        ),
      });
    });
  }
  onSubmitUpdateNickname() {
    if (this.nicknameForm.valid) {
      this.store.dispatch(
        updateNicknameAction({
          nickname: this.nicknameForm.value.nickname || '',
        })
      );
    }
  }
  onSubmitUpdateFirstname() {
    if (this.firstNameForm.valid) {
      this.store.dispatch(
        updateFirstNameAction({
          firstname: this.firstNameForm.value.first_name || '',
        })
      );
    }
  }

  onSubmitUpdateLastname() {
    if (this.lastNameForm.valid) {
      this.store.dispatch(
        updateLastNameAction({
          lastname: this.lastNameForm.value.last_name || '',
        })
      );
    }
  }

  onSubmitUpdateBirthday() {
    if (this.firstNameForm.valid) {
      console.log(this.dateBirthDayForm.value.birthdate);

      this.store.dispatch(
        updateBirthdateAction({
          birthday: formatFecha(this.dateBirthDayForm.value.birthdate),
        })
      );
    }
  }

  onSubmitUpdatePhoneNumber() {
    if (this.phoneNumberForm.valid) {
      console.log(this.phoneNumberForm.value);
      this.store.dispatch(
        updatePhoneNumberAction({
          phonenumber: this.phoneNumberForm.value.phone_number || '',
        })
      );
    }
  }
}
