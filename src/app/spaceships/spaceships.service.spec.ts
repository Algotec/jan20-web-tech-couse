import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import {SpaceshipsService} from './spaceships.service';
import {NotificationsService} from '../notifications/notifications.service';

const notificationServiceMock: Partial<NotificationsService> = {
  notify(text: string): () => (Error | null) {
    return () => null;
  }
};

describe('SpaceshipsService', () => {
  let service :SpaceshipsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{provide: NotificationsService, useValue: notificationServiceMock}]

    });
    service = TestBed.get(SpaceshipsService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('exposes myShips array',()=>{
    expect(Array.isArray(service.myShips)).toBeTruthy();
  });

});
