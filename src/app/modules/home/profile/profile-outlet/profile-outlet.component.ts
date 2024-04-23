import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-outlet',
  templateUrl: './profile-outlet.component.html',
  styleUrls: ['./profile-outlet.component.sass'],
})
export class ProfileOutletComponent {
  titlehead: string = 'Perfil de usuario';
  subtitlehead: string = 'Administrar tu perfil de usuario';
  descriptionhead: string =
    'En esta sección puedes gestionar la información de tu perfil de usuario, incluyendo detalles personales, preferencias y configuraciones de cuenta.';

  routes: any = [
    { title: 'Informacion', link: '/home/profile/informacion' },
    { title: 'Editar Perfil', link: '/home/profile/edit-profile' },
    { title: 'Cuenta', link: '/home/profile/account' },
    { title: 'Seguridad', link: '/home/profile/security' },
    { title: 'Historial de actividades', link: '/home/profile/history' },
    { title: 'Cambiar contraseña', link: '/home/profile/password' },
  ];
}
