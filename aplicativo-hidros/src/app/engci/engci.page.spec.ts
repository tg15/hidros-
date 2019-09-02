import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngciPage } from './engci.page';

describe('EngciPage', () => {
  let component: EngciPage;
  let fixture: ComponentFixture<EngciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngciPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
