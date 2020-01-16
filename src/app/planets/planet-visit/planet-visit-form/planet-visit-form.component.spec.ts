import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanetVisitFormComponent} from './planet-visit-form.component';

describe('PlanetVisitFormComponent', () => {
  let component: PlanetVisitFormComponent;
  let fixture: ComponentFixture<PlanetVisitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetVisitFormComponent ]
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
