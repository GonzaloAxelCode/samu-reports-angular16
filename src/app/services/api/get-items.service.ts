import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetItemsService {
  constructor() {}

  getDataApi(): Observable<any> {
    const data = [
      {
        name: 'Pudgy Penguin #1',
        price: 0.1,
        image: '#',
      },
      {
        name: 'Fanatismo FX #2',
        price: 0.3,
        image: '#',
      },
      {
        name: 'Rrtro Anim #3',
        price: 0.3,
        image: '#',
      },
    ];

    return of(data).pipe(delay(1500));
  }
}
