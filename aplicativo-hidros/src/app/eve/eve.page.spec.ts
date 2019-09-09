import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvePage } from './eve.page';

describe('EvePage', () => {
  let component: EvePage;
  let fixture: ComponentFixture<EvePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
