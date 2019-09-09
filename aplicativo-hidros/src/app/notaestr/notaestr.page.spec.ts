import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaestrPage } from './notaestr.page';

describe('NotaestrPage', () => {
  let component: NotaestrPage;
  let fixture: ComponentFixture<NotaestrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaestrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaestrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
