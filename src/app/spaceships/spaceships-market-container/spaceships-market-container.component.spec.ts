import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpaceshipsMarketContainer} from './spaceships-market-container.component';
import {Store, StoreModule} from '@ngrx/store';
import {SpaceAppState} from '../../common/state/app.state';

describe('SpaceshipsContainerComponent', () => {
  let component: SpaceshipsMarketContainer;
  let fixture: ComponentFixture<SpaceshipsMarketContainer>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ SpaceshipsMarketContainer ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsMarketContainer);
    component = fixture.componentInstance;
    store = TestBed.get<Store<SpaceAppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
