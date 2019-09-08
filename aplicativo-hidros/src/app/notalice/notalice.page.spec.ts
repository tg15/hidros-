import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotalicePage } from './notalice.page';

describe('NotalicePage', () => {
  let component: NotalicePage;
  let fixture: ComponentFixture<NotalicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotalicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotalicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
