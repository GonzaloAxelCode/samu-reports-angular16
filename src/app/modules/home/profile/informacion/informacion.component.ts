import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectDataUser } from 'src/app/state/selectors/user.selector';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.sass'],
})
export class InformacionComponent {
  constructor(private store: Store<any>, private router: Router) {}
  user: any = {};
  datauser$: Observable<any> = new Observable();

  ngOnInit(): void {
    this.datauser$ = this.store.select(selectDataUser);
    this.datauser$.subscribe((data) => {
      this.user = data;
    });
  }
}
