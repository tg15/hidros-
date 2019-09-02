import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngambPage } from './engamb.page';

describe('EngambPage', () => {
  let component: EngambPage;
  let fixture: ComponentFixture<EngambPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngambPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngambPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
