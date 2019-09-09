import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotamatPage } from './notamat.page';

describe('NotamatPage', () => {
  let component: NotamatPage;
  let fixture: ComponentFixture<NotamatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotamatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotamatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
