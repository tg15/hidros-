import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaspdaPage } from './notaspda.page';

describe('NotaspdaPage', () => {
  let component: NotaspdaPage;
  let fixture: ComponentFixture<NotaspdaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaspdaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaspdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
