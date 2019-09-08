import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotamecPage } from './notamec.page';

describe('NotamecPage', () => {
  let component: NotamecPage;
  let fixture: ComponentFixture<NotamecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotamecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotamecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
