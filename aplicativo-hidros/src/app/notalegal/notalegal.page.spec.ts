import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotalegalPage } from './notalegal.page';

describe('NotalegalPage', () => {
  let component: NotalegalPage;
  let fixture: ComponentFixture<NotalegalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotalegalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotalegalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
