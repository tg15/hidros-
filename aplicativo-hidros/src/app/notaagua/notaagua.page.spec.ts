import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaaguaPage } from './notaagua.page';

describe('NotaaguaPage', () => {
  let component: NotaaguaPage;
  let fixture: ComponentFixture<NotaaguaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaaguaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaaguaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
