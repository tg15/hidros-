import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasegPage } from './notaseg.page';

describe('NotasegPage', () => {
  let component: NotasegPage;
  let fixture: ComponentFixture<NotasegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
