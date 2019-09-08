import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotapcPage } from './notapc.page';

describe('NotapcPage', () => {
  let component: NotapcPage;
  let fixture: ComponentFixture<NotapcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotapcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotapcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
