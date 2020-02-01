import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyShipsComponent} from './my-ships.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Appolo} from '@algotec/spaceship-parts';
import {By} from '@angular/platform-browser';
import {Enterprise} from '@algotec/spaceship-parts';

describe('MyShipsComponent', () => {
  let component: MyShipsComponent;
  let fixture: ComponentFixture<MyShipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [MyShipsComponent]
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

  it('shows ships from input on screen', () => {
    component.ships = {0: new Appolo(), 1: new Enterprise()};
    fixture.detectChanges();
    const numberOfShips = fixture.debugElement.queryAll(By.css('app-spaceship-image')).length
    expect(numberOfShips).toBe(2);
  });

  it('will set drag data to shipID', () => {
    component.ships = {0: new Appolo()};
    fixture.detectChanges();
    const shipNode = fixture.debugElement.query(By.css('app-spaceship-image'));
    const dataSpy = jasmine.createSpy('setData');
    shipNode.triggerEventHandler('dragstart', {dataTransfer: {setData: dataSpy}, target: shipNode.nativeElement});
    expect(dataSpy).toHaveBeenCalledWith('text/plain', '0');
  })
});
