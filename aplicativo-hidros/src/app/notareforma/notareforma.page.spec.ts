import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotareformaPage } from './notareforma.page';

describe('NotareformaPage', () => {
  let component: NotareformaPage;
  let fixture: ComponentFixture<NotareformaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotareformaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotareformaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
