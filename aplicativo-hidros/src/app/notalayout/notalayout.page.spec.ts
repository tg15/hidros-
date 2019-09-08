import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotalayoutPage } from './notalayout.page';

describe('NotalayoutPage', () => {
  let component: NotalayoutPage;
  let fixture: ComponentFixture<NotalayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotalayoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotalayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
