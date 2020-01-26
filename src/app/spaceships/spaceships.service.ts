import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Appolo, Enterprise, Genesis, IEngine, ISpaceship, SpaceShipFactory} from '@algotec/spaceship-parts';
import {Cords, ShipWithPosition} from '../planets/common/common.types';
import {delay} from 'rxjs/operators';
import {NotificationsService} from '../notifications/notifications.service';

const basePlanetPos: Omit<ShipWithPosition, 'ship'> = {anchorPlanet: 'Earth', move: {x: 0, y: 0}};

@Injectable({
  providedIn: 'root'
})
export class SpaceshipsService {
  private _myShips: ShipWithPosition[] = [];
  private myShipsSubject: BehaviorSubject<ShipWithPosition[]> = new BehaviorSubject<ShipWithPosition[]>(this._myShips);
  public myShips$ = this.myShipsSubject.asObservable();

  private get myShips(): ShipWithPosition[] {
    return this._myShips;
  }

  private set myShips(value: ShipWithPosition[]) {
    this.myShipsSubject.next(value);
    this._myShips = value;
  }

  constructor(private notificationService: NotificationsService) {

  }

  shipsAvailable$: Observable<{ [key: string]: SpaceShipFactory<any> }> = of({Enterprise, Appolo, Genesis});


  constructSpaceShip<T extends ISpaceship>(spaceship: SpaceShipFactory<T>, engine?: IEngine): Promise<T> {
    const removeNotification = this.notificationService.notify('Ship under construction...');
    const ship = new spaceship(engine);
    const complexity = ship.complexity + ship.engine.complexity;
    return of<T>(ship).pipe(delay(complexity * 2000)).toPromise()
      .then((ship) => {
        removeNotification();
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
    const ship = this._getShip(shipOrId);
    if (ship) {
      ship.anchorPlanet = anchorPlanet;
      ship.move = move;
    }

  }

}
