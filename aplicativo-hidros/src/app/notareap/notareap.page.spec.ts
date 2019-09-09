import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotareapPage } from './notareap.page';

describe('NotareapPage', () => {
  let component: NotareapPage;
  let fixture: ComponentFixture<NotareapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotareapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotareapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
