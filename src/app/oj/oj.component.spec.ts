import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OjComponent } from './oj.component';

describe('IndexComponent', () => {
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
