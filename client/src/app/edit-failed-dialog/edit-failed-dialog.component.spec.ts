import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFailedDialogComponent } from './edit-failed-dialog.component';

describe('EditFailedDialogComponent', () => {
  let component: EditFailedDialogComponent;
  let fixture: ComponentFixture<EditFailedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFailedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFailedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
