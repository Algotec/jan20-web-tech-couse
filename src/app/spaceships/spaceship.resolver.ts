import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ISpaceship} from '@algotec/spaceship-parts';
import {SpaceshipsService} from './spaceships.service';
import {shipRouteData} from '../planets/common/common.types';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class SpaceshipResolver implements Resolve<ISpaceship> {
  constructor(private spaceSvc: SpaceshipsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<ISpaceship> { // or  | Promise<ISpaceship> |
    return this.spaceSvc.getShip$(route.params[shipRouteData]).pipe(take(1));
  }
}
