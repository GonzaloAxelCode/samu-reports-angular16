import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-users-outlet',
  templateUrl: './manage-users-outlet.component.html',
  styleUrls: ['./manage-users-outlet.component.sass'],
})
export class ManageUsersOutletComponent {
  titlehead: string = 'Administrar usuarios';
  subtitlehead: string = 'Gestiona los perfiles de usuario';
  descriptionhead: string =
    'En esta sección puedes administrar la información de los perfiles de usuario, incluyendo detalles personales, preferencias y configuraciones de cuenta.';

  routes: any = [
    { title: 'Todos los usuarios', link: '/home/manage-users' },
    {
      title: 'Usuarios desactivados',
      link: '/home/manage-users/desactiveusers',
    },
  ];
}
