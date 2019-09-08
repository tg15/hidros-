import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotahidroPage } from './notahidro.page';

describe('NotahidroPage', () => {
  let component: NotahidroPage;
  let fixture: ComponentFixture<NotahidroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotahidroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotahidroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
