import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-anycomponent',
  templateUrl: './anycomponent.component.html',
  styleUrls: ['./anycomponent.component.scss'],
})
export class AnycomponentComponent {
  constructor(private store: Store<any>) {}
  activeTabId: string = "Ver Todos";

  testForm = new FormGroup({
    testValue1: new FormControl(true),
    testValue2: new FormControl(true),
    testValue3: new FormControl(true),
    testValue4: new FormControl(true),
    testValue5: new FormControl(true),
    testValue6: new FormControl(true),
    testValue7: new FormControl(true),
    testValue8: new FormControl(true),
    testValue9: new FormControl(true),
    testValue10: new FormControl(true),
    testValue11: new FormControl(true),
    testValue12: new FormControl(true),
    testValue13: new FormControl(true),
    testValue14: new FormControl(true),
    testValue15: new FormControl(true),
    testValue16: new FormControl(true),
    testValue17: new FormControl(true),
    testValue18: new FormControl(true),
    testValue19: new FormControl(true),
  });

  ngOnInit(): void {
    //  this.testForm.disable()
  }

   setActiveTab(tabId: string) {
    this.activeTabId = tabId;
  }
}
