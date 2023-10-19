import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bannerpresentation',
  templateUrl: './bannerpresentation.component.html',
  styleUrls: ['./bannerpresentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerpresentationComponent {

  index = 0
}
