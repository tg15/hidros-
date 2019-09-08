import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaexausPage } from './notaexaus.page';

describe('NotaexausPage', () => {
  let component: NotaexausPage;
  let fixture: ComponentFixture<NotaexausPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaexausPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaexausPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
