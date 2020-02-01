import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyShipsComponent} from './my-ships.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('MyShipsComponent', () => {
  let component: MyShipsComponent;
  let fixture: ComponentFixture<MyShipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ MyShipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
