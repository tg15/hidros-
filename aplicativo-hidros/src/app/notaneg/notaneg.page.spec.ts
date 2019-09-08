import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotanegPage } from './notaneg.page';

describe('NotanegPage', () => {
  let component: NotanegPage;
  let fixture: ComponentFixture<NotanegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotanegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotanegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
