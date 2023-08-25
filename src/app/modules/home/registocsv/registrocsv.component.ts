import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
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
  hayRegistros: boolean = false;
  tag1 = 'Maestro His Colegio';
  tag2 = 'Maestro His Actividad';
  testForm = new FormGroup({
    testValue1: new FormControl(true),
  });
}
