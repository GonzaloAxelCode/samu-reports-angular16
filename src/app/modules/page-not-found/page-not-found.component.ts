import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  styleUrls: ['./page-not-found.component.sass'],
  template: `Page not found
    <a routerLink="/account/login">Navigate to Login</a>`,
})
export class PageNotFoundComponent {}
