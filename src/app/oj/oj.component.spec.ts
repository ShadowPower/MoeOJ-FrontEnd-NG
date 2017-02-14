/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OjComponent } from './oj.component';

describe('OjComponent', () => {
  let component: OjComponent;
  let fixture: ComponentFixture<OjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
