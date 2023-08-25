import { Component } from '@angular/core';
import { tuiIconMenu } from '@taiga-ui/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  open = false;
  src = tuiIconMenu;
  toggle(open: any): void {
    this.open = open;
  }
}
