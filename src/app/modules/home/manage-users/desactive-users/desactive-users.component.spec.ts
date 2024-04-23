import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactiveUsersComponent } from './desactive-users.component';

describe('DesactiveUsersComponent', () => {
  let component: DesactiveUsersComponent;
  let fixture: ComponentFixture<DesactiveUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesactiveUsersComponent]
    });
    fixture = TestBed.createComponent(DesactiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
