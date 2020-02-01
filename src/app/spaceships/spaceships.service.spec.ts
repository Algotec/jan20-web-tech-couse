import {async, fakeAsync, flush, flushMicrotasks, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import {SpaceshipsService} from './spaceships.service';
import {NotificationsService} from '../notifications/notifications.service';
import {Appolo} from '@algotec/spaceship-parts';



describe('SpaceshipsService', () => {
  let service: SpaceshipsService;
  let  notificationServiceMock:Partial<NotificationsService>;
  beforeEach(() => {
     notificationServiceMock = {
      notify:jasmine.createSpy('notify', (message:string) => {
        return () => null;
      }).and.callThrough()
     };


    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{provide: NotificationsService, useValue: notificationServiceMock}]

    });
    service = TestBed.get(SpaceshipsService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('exposes myShips array', () => {
    expect(Array.isArray(service.myShips)).toBeTruthy();
  });
  it('exposes shipsAvailable$ observable which is a hashMap of string to ShipFactories', () => {
    service.shipsAvailable$.subscribe((ships) => {
      expect(ships[Appolo.name]).toEqual(Appolo);
    });
  });

  it('exposes myShips$ observable, allowing subscription for myShips', () => {
    service.myShips$.subscribe((ships) => {
      expect(service.myShips).toEqual(ships);
    });
  })
  describe('constructSpaceShip method', () => {
    it('called with factory it returns a promise for the new Spaceships instance, time is calculated by complexity', fakeAsync(() => {
      service.constructSpaceShip(Appolo).then((ship) => {
        expect(ship instanceof Appolo).toBeTruthy();
      });
      tick(6 * 2000);
    }));

    it('calls notification service notify method with Ship under construction message', async(() => {
      service.constructSpaceShip(Appolo).then(() => {
        expect(notificationServiceMock.notify).toHaveBeenCalledWith('Ship under construction...')
      })
    }),7*2000)
  })


});
