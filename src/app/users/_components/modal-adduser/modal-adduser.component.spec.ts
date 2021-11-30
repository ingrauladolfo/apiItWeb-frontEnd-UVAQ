import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdduserComponent } from './modal-adduser.component';

describe('ModalAdduserComponent', () => {
  let component: ModalAdduserComponent;
  let fixture: ComponentFixture<ModalAdduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAdduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
