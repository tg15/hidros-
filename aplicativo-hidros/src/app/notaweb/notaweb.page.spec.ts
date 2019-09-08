import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotawebPage } from './notaweb.page';

describe('NotawebPage', () => {
  let component: NotawebPage;
  let fixture: ComponentFixture<NotawebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotawebPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotawebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
