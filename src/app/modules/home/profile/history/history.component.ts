import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  columns: any = [
    { id: 'Codigo_Departamento_Inei', title: 'Accion' },
    { id: 'Codigo_Departamento_Reniec', title: 'Usuario' },
    { id: 'Codigo_Distrito_Inei', title: 'Fecha y Hora' },
    { id: 'Codigo_Distrito_Reniec', title: 'Ultima salida de session' },
  ];
}
