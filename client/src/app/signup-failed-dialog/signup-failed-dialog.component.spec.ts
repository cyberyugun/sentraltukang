import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFailedDialogComponent } from './signup-failed-dialog.component';

describe('SignupFailedDialogComponent', () => {
  let component: SignupFailedDialogComponent;
  let fixture: ComponentFixture<SignupFailedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFailedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFailedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
