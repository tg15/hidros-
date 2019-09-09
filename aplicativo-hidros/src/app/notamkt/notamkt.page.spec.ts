import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotamktPage } from './notamkt.page';

describe('NotamktPage', () => {
  let component: NotamktPage;
  let fixture: ComponentFixture<NotamktPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotamktPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotamktPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
