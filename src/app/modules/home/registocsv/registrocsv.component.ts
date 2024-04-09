import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import {
  TuiAlertService,
  TuiAppearance,
  tuiButtonOptionsProvider,
  TuiDialogService,
} from '@taiga-ui/core';
import { Observable, switchMap } from 'rxjs';
import {
  emptyModelRecordsAction,
  loadAllModels,
  uploadLoadRegistros,
} from 'src/app/state/actions/uploadcsv.actions';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { selectAllModels } from 'src/app/state/selectors/upload.selectors';
import { TUI_PROMPT, TuiPromptData } from '@taiga-ui/kit';
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
export class RegistrocsvComponent implements OnInit {
  id: string = '';

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService
  ) {}

  hayRegistros: boolean = !false;
  testForm = new FormGroup({ testValue1: new FormControl(false) });
  getDataModels$: Observable<any> = new Observable();
  selectRegistros$: Observable<any> = new Observable();
  models: any = [];
  detailModelInfo: any = {
    title: '',
    count: 0,
    nombre_modelo: '',
    tiene_datos: false,
    properties: [],
  };
  columns: any = [];
  display: boolean = false;
  onClick(): void {
    const data: TuiPromptData = {
      content:
        'Estas seguro de  <code> Eliminar </code> todos los registros de este modelo ?  ',
      yes: 'Confirmar',
      no: 'Cancelar',
    };
    this.dialogs
      .open<boolean>(TUI_PROMPT, {
        label: 'Do you like Taiga UI?',
        size: 's',
        data,
      })
      .pipe(
        switchMap(
          (response: any) =>
            response &&
            this.store.dispatch(
              emptyModelRecordsAction({
                nameModel: this.id,
              })
            )
        )
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllModels());
    this.getDataModels$ = this.store.select(selectAllModels);

    this.getDataModels$.subscribe((data) => {
      this.models = data;
      this.detailModelInfo = this.models.find(
        (el: any) => el.nombre_modelo.toUpperCase() === this.id.toUpperCase()
      );

      this.detailModelInfo?.properties.map((el: any) => {
        this.columns.push({
          id: el.namePropertie,
          title: el.namePropertie,
        });
      });
      this.testForm.patchValue({
        testValue1: this.detailModelInfo?.tiene_datos,
      });
      this.hayRegistros = this.detailModelInfo?.tiene_datos;
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      this.id = idParam !== null ? idParam : '';
    });

    this.store.dispatch(
      uploadLoadRegistros({
        nameModel: this.id,
      })
    );
  }
}
