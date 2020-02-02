import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Appolo, Enterprise, Genesis, IEngine, ISpaceship, SpaceShipFactory} from '@algotec/spaceship-parts';
import {Cords, ShipWithPosition} from '../planets/common/common.types';
import {delay, pluck} from 'rxjs/operators';
import {NotificationsService} from '../notifications/notifications.service';
import {Router} from '@angular/router';

import {SpaceAppState} from '../reducers/index';
import {Store} from '@ngrx/store';
import {spaceShipsWithPositionSelector, spaceShipWithPositionSelector} from './state/spaceships.state';
import {assignShip, spaceshipLost} from './state/spaceship.actions';

export const basePlanetPos: Omit<ShipWithPosition, 'ship'> = {anchorPlanet: 'Earth', move: {x: 0, y: 0}};

@Injectable({
  providedIn: 'root'
})
export class SpaceshipsService {

  constructor(private notificationService: NotificationsService, private router: Router, private store: Store<SpaceAppState>) {

  }

  shipsAvailable$: Observable<{ [key: string]: SpaceShipFactory<any> }> = of({Enterprise, Appolo, Genesis});
  myShips$ = this.store.select(spaceShipsWithPositionSelector);

  constructSpaceShip<T extends ISpaceship>(spaceship: SpaceShipFactory<T>, engine?: IEngine): Promise<T> {
    const removeNotification = this.notificationService.notify('Ship under construction...');
    const ship = new spaceship(engine);
    const complexity = ship.complexity + ship.engine.complexity;
    return of<T>(ship).pipe(delay(complexity * 2)).toPromise()
      .then((ship) => {
        removeNotification();
        return ship;
      });
  }

  getShip$(shipId: number): Observable<ISpaceship | undefined> {
    return this.store.select(spaceShipWithPositionSelector, {id: shipId}).pipe(pluck('ship'));
  }

  getPosition$(shipId: number): Observable<ShipWithPosition> {
    return this.store.select(spaceShipWithPositionSelector, {id: shipId});
  }


  setPosition(shipId: number, anchorPlanet: string, move: Cords = {x: 0, y: 0}) {
    this.store.dispatch(assignShip({shipId, destination: anchorPlanet}))
  }

  onFuelEnd(shipId: number | string) {
    shipId = +shipId; // cast to number;
    const stopNotify = this.notificationService.notify('spaceship lost!');
    this.store.dispatch(spaceshipLost({shipId: shipId}));
    setTimeout(stopNotify, 5000);
    this.router.navigateByUrl('/');
  }

}
