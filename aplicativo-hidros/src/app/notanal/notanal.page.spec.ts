import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotanalPage } from './notanal.page';

describe('NotanalPage', () => {
  let component: NotanalPage;
  let fixture: ComponentFixture<NotanalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotanalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotanalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
