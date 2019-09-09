import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaopPage } from './notaop.page';

describe('NotaopPage', () => {
  let component: NotaopPage;
  let fixture: ComponentFixture<NotaopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
