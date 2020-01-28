import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Appolo, Enterprise, Genesis, IEngine, ISpaceship, LiquidNitrogenFuelSupply, RocketEngine, SpaceShipFactory} from '@algotec/spaceship-parts';
import {Cords, ShipWithPosition} from '../planets/common/common.types';
import {delay} from 'rxjs/operators';
import {NotificationsService} from '../notifications/notifications.service';
import {Router} from '@angular/router';

export const basePlanetPos: Omit<ShipWithPosition, 'ship'> = {anchorPlanet: 'Earth', move: {x: 0, y: 0}};

@Injectable({
  providedIn: 'root'
})
export class SpaceshipsService {

  get myShips(): ShipWithPosition[] {
    return this._myShips;
  }

  set myShips(value: ShipWithPosition[]) {
    this._myShips = value;
    this.myShipsSubject.next(value);
  }

  constructor(private notificationService: NotificationsService, private router: Router) {

  }

  shipsAvailable$: Observable<{ [key: string]: SpaceShipFactory<any> }> = of({Enterprise, Appolo, Genesis});

  // the following construct works, but it requires us to keep 3 copies of our state
  // 1 - internal array (upon we must act in immutable fashion)
  // 2 - a subject we trigger when with the setter
  // 3 - the observable public API

  // this is convoluted, in the near future we will see ways to deal with observable state in a better style.
  // private _myShips: ShipWithPosition[] = [];
  // for testing we can start with a ship in initial state!
  private _myShips: ShipWithPosition[] = [{
    ship: new Appolo(new RocketEngine(new LiquidNitrogenFuelSupply(5))),
    ...basePlanetPos
  }
  ];
  private myShipsSubject = new BehaviorSubject<ShipWithPosition[]>(this.myShips);
  myShips$ = this.myShipsSubject.asObservable();

  constructSpaceShip<T extends ISpaceship>(spaceship: SpaceShipFactory<T>, engine?: IEngine): Promise<T> {
    const removeNotification = this.notificationService.notify('Ship under construction...');
    const ship = new spaceship(engine);
    const complexity = ship.complexity + ship.engine.complexity;
    return of<T>(ship).pipe(delay(complexity * 2000)).toPromise()
      .then((ship) => {
        removeNotification();
        //notice this change to immutablity - we won't trigger the setter if we just push to existing array
        this.myShips = [...this.myShips, {ship: ship as ISpaceship, ...basePlanetPos}];
        return ship;
      });
  }

  getShip(shipId: number): ISpaceship | undefined {
    const shipWithPosition = this._myShips[shipId];
    if (shipWithPosition) {
      return shipWithPosition.ship
    }
  }

  private _getShip(shipOrId: number | ISpaceship) {
    return (typeof shipOrId === 'number') ? this._myShips[shipOrId] : this._myShips.find(shipsDesc => shipsDesc.ship === shipOrId);
  }

  getPosition(shipOrId: number | ISpaceship): { move: Cords; anchorPlanet: string } {
    const shipObj = this._getShip(shipOrId);
    if (shipObj) {
      let {anchorPlanet, move} = shipObj;
      return {anchorPlanet, move};
    }
  }


  setPosition(shipOrId: number | ISpaceship, anchorPlanet: string, move: Cords = {x: 0, y: 0}) {
    const ship = this._getShip(+shipOrId);
    if (ship) {
      ship.anchorPlanet = anchorPlanet;
      ship.move = move;
    }

  }

  onFuelEnd(shipId: number|string) {
    shipId = +shipId; // cast to number;
    const stopNotify = this.notificationService.notify('spaceship lost!');
    this.myShips = [...this.myShips.slice(0, shipId), ...this.myShips.slice(shipId + 1)];
    setTimeout(stopNotify, 5000);
    this.router.navigateByUrl('/');
  }

}
