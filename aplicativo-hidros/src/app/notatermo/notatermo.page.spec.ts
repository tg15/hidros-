import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotatermoPage } from './notatermo.page';

describe('NotatermoPage', () => {
  let component: NotatermoPage;
  let fixture: ComponentFixture<NotatermoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotatermoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotatermoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
