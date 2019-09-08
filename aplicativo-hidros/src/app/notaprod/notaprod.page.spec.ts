import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaprodPage } from './notaprod.page';

describe('NotaprodPage', () => {
  let component: NotaprodPage;
  let fixture: ComponentFixture<NotaprodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaprodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaprodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
