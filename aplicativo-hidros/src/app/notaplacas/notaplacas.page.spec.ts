import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaplacasPage } from './notaplacas.page';

describe('NotaplacasPage', () => {
  let component: NotaplacasPage;
  let fixture: ComponentFixture<NotaplacasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaplacasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaplacasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
