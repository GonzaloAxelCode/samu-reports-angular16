import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headsection',
  templateUrl: './headsection.component.html',
  styleUrls: ['./headsection.component.sass'],
})
export class HeadsectionComponent {
  @Input() navigationitems: any[] = [];
  @Input() titlehead: string = '';
  @Input() subtitlehead: string = '';
  @Input() descriptionhead: string = '';

  constructor() {}
}
