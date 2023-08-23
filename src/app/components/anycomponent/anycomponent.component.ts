import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-anycomponent',
  templateUrl: './anycomponent.component.html',
  styleUrls: ['./anycomponent.component.scss'],
})
export class AnycomponentComponent {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}
}
