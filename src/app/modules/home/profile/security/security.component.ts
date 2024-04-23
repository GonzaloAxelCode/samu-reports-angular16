import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.sass'],
})
export class SecurityComponent {
  pinForm = new FormGroup({
    pin: new FormControl('', Validators.required),
    repin: new FormControl('', Validators.required),
  });
}
