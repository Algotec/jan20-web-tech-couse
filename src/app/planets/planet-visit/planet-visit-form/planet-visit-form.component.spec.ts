import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanetVisitFormComponent} from './planet-visit-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('PlanetVisitFormComponent', () => {
  let component: PlanetVisitFormComponent;
  let fixture: ComponentFixture<PlanetVisitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports:[RouterTestingModule.withRoutes([]),ReactiveFormsModule],
      declarations: [PlanetVisitFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetVisitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
