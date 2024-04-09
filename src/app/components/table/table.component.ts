import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectRegistros } from 'src/app/state/selectors/upload.selectors';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() columns: any[] = [];

  columns_: any = [
    { id: 'Codigo_Departamento_Inei', title: 'Código Departamento INEI' },
    { id: 'Codigo_Departamento_Reniec', title: 'Código Departamento Reniec' },
    { id: 'Codigo_Distrito_Inei', title: 'Código Distrito INEI' },
    { id: 'Codigo_Distrito_Reniec', title: 'Código Distrito Reniec' },
    { id: 'Codigo_Provincia_Inei', title: 'Código Provincia INEI' },
    { id: 'Codigo_Provincia_Reniec', title: 'Código Provincia Reniec' },
    { id: 'Departamento', title: 'Departamento' },
    { id: 'Provincia', title: 'Provincia' },
    { id: 'Distrito', title: 'Distrito' },
  ];

  constructor(private store: Store<any>) {
    this.selectRegistros$ = this.store.select(selectRegistros);
  }
  selectRegistros$: Observable<any> = new Observable();
  registros: any = [];
  getDataModels$: Observable<any> = new Observable();

  models: any = [];
  detailModelInfo: any = {
    title: '',
    count: 0,
    nombre_modelo: '',
    tiene_datos: false,
    properties: [],
  };
  ngOnInit(): void {
    this.selectRegistros$.subscribe((data) => {
      if (data) {
        this.registros = data?.slice(0, 100);
      }
    });
  }
}
