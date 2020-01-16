import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Appolo, Enterprise, Genesis, SpaceShipFactory} from '@algotec/spaceship-parts';
import {ShipWithPosition} from '../planets/common/common.types';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipsService {
  shipsAvailable$: Observable<{ [key: string]: SpaceShipFactory<any> }> = of({Enterprise, Appolo, Genesis});
  private myShips: ShipWithPosition[] = [];
  constructor() { }
}
