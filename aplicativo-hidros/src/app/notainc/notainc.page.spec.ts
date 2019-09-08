import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaincPage } from './notainc.page';

describe('NotaincPage', () => {
  let component: NotaincPage;
  let fixture: ComponentFixture<NotaincPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaincPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaincPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
