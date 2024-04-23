import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActivateEmailAction } from 'src/app/state/actions/auth.actions';
import { activateAccountAction } from 'src/app/state/actions/user.actions';

@Component({
  selector: 'app-activateaccount',
  templateUrl: './activateaccount.component.html',
  styleUrls: ['./activateaccount.component.sass'],
})
export class ActivateaccountComponent implements OnInit {
  token: string = '';
  uid: string = '';

  constructor(private store: Store<any>, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.uid = params['uid'];
    });

    // Obtener el valor de 'token'
    this.route.params.subscribe((params) => {
      this.token = params['token'];
    });
  }

  onActivateAccountUidToken() {
    this.store.dispatch(
      authActivateEmailAction({
        uid: this.uid,
        token: this.token,
      })
    );
  }
}
