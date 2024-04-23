import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {
  getIsActivationActivePageLocalStorage,
  getIsResetPasswordPageLocalStorage,
} from '../services/localstorage/notification.service';

@Injectable({
  providedIn: 'root',
})
export class PageResetPasswordGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isEnabled = getIsResetPasswordPageLocalStorage();
    if (isEnabled) {
      return true; // Permite la activación de la página
    } else {
      this.router.navigate(['/']); // Redirige a la página principal si la activación está deshabilitada
      return false;
    }
  }
}
