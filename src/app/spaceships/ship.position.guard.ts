import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {SpaceshipsService} from './spaceships.service';
import {ISpaceship} from '@algotec/spaceship-parts';
import {fromPlanetRouteData, shipRouteData} from '../planets/common/common.types';
import {Injectable} from '@angular/core';
import {SpaceshipResolver} from './spaceship.resolver';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ShipPositionGuard implements CanActivate {

  constructor(private spaceSvc: SpaceshipsService,) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.spaceSvc.getPosition$(route.params[shipRouteData]).pipe(map(shipWithPosition => {
      return shipWithPosition && shipWithPosition.anchorPlanet === route.params[fromPlanetRouteData];
    }));
  }
}
