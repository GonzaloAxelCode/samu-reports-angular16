import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { Observable } from 'rxjs';
import { uploadLoadRegistros } from 'src/app/state/actions/uploadcsv.actions';
@Component({
  selector: 'app-registrocsv',
  templateUrl: './registrocsv.component.html',
  styleUrls: ['./registrocsv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      shape: 'rounded',
      appearance: TuiAppearance.Outline,
      size: 'm',
    }),
  ],
})
export class RegistrocsvComponent {
  constructor(private store: Store<any>) {}

  hayRegistros: boolean = !false;
  tag1 = 'Sin relacion';
  tag2 = 'Maestro His Actividad';
  testForm = new FormGroup({
    testValue1: new FormControl(true),
  });
  selectRegistros$: Observable<any> = new Observable();

  ngOnInit(): void {
    this.store.dispatch(
      uploadLoadRegistros({
        nameModel: 'maestro_his_ubigeo_inei_reniec',
      })
    );
  }
}
