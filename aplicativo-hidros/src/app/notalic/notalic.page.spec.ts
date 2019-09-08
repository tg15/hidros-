import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotalicPage } from './notalic.page';

describe('NotalicPage', () => {
  let component: NotalicPage;
  let fixture: ComponentFixture<NotalicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotalicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotalicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
