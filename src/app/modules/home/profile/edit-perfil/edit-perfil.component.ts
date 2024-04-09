import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.sass'],
})
export class EditPerfilComponent {
  readonly nameFormControl = new FormControl('', []);
  readonly lastNameFormControl = new FormControl('', []);

  editprofileForm = new FormGroup({
    name: this.nameFormControl,
    lastname: this.lastNameFormControl,
  });
}
