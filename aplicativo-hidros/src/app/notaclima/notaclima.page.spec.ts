import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaclimaPage } from './notaclima.page';

describe('NotaclimaPage', () => {
  let component: NotaclimaPage;
  let fixture: ComponentFixture<NotaclimaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaclimaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaclimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
