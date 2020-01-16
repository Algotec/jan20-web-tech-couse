import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Appolo, Enterprise, Genesis, IEngine, ISpaceship, SpaceShipFactory} from '@algotec/spaceship-parts';
import {Cords, ShipWithPosition} from '../planets/common/common.types';
import {delay} from 'rxjs/operators';

const basePlanetPos: Omit<ShipWithPosition, 'ship'> = {anchorPlanet: 'Earth', move: {x: 0, y: 0}};

@Injectable({
  providedIn: 'root'
})
export class SpaceshipsService {
  shipsAvailable$: Observable<{ [key: string]: SpaceShipFactory<any> }> = of({Enterprise, Appolo, Genesis});
  private myShips: ShipWithPosition[] = [];

  constructSpaceShip<T extends ISpaceship>(spaceship: SpaceShipFactory<T>, engine?: IEngine): Promise<T> {
    const ship = new spaceship(engine);
    const complexity = ship.complexity + ship.engine.complexity;
    return of<T>(ship).pipe(delay(complexity * 2000)).toPromise()
      .then((ship) => {
        this.myShips.push({ship: ship as ISpaceship, ...basePlanetPos});
        return ship;
      });
  }

  getShip(shipId: number): ISpaceship | undefined {
    const shipWithPosition = this.myShips[shipId];
    if (shipWithPosition) {
      return shipWithPosition.ship
    }
  }

  private _getShip(shipOrId: number | ISpaceship) {
    return (typeof shipOrId === 'number') ? this.myShips[shipOrId] : this.myShips.find(shipsDesc => shipsDesc.ship === shipOrId);
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
