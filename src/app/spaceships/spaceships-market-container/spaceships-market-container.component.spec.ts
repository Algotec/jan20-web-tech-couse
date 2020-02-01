import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpaceshipsMarketContainer} from './spaceships-market-container.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('SpaceshipsContainerComponent', () => {
  let component: SpaceshipsMarketContainer;
  let fixture: ComponentFixture<SpaceshipsMarketContainer>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [SpaceshipsMarketContainer]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsMarketContainer);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
