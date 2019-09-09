import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotapredialPage } from './notapredial.page';

describe('NotapredialPage', () => {
  let component: NotapredialPage;
  let fixture: ComponentFixture<NotapredialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotapredialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotapredialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
