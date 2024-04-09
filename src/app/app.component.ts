import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { checkTokenAction } from './state/actions/auth.actions';

@Component({
  selector: 'app-root',
  template: ' <tui-root><router-outlet></router-outlet><tui-root>',
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) {}
  title = 'angular-samu';
  show = true;
  ngOnInit(): void {
    this.store.dispatch(checkTokenAction());
  }
}
