import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotamanuPage } from './notamanu.page';

describe('NotamanuPage', () => {
  let component: NotamanuPage;
  let fixture: ComponentFixture<NotamanuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotamanuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotamanuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
