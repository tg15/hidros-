import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngPage } from './eng.page';

describe('EngPage', () => {
  let component: EngPage;
  let fixture: ComponentFixture<EngPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
