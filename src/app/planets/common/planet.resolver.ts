import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {destinationPlanetRouteData, fromPlanetRouteData, IPlanetData} from './common.types';
import {Observable, of} from 'rxjs';
import {PlanetsService} from './planets.service';

export abstract class PlanetResolver implements Resolve<IPlanetData> {
  protected constructor(protected routeParamName: string, private planetsService: PlanetsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPlanetData> {
    return this.planetsService.getByName$(route.params[this.routeParamName]);
  }
}

@Injectable({providedIn: 'root'})
export class DestinationPlanetResolver extends PlanetResolver implements Resolve<IPlanetData> {
  constructor(planetsService: PlanetsService) {
    super(destinationPlanetRouteData, planetsService);
  }
}

@Injectable({providedIn: 'root'})
export class FromPlanetResolver extends PlanetResolver implements Resolve<IPlanetData> {
  constructor(planetsService: PlanetsService) {
    super(fromPlanetRouteData, planetsService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPlanetData> {
    if (route.params[this.routeParamName] === 'Earth') {
      return of({name: 'Earth'});
    } else {
      return super.resolve(route, state);
    }
  }
}
