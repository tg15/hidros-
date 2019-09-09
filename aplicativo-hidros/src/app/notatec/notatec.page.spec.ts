import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotatecPage } from './notatec.page';

describe('NotatecPage', () => {
  let component: NotatecPage;
  let fixture: ComponentFixture<NotatecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotatecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotatecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
