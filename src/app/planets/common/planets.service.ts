import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPlanetData} from './common.types';
import {Observable, of} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private cache$: Observable<IPlanetData[]>;
  // see https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html
  // on approaches on how to make this generic and declarative
  // PACS's ng-store-infra has a built in http cache service

  getAll(): Observable<IPlanetData[]> {
    if (!this.cache$) {
      this.cache$ = this.getData().pipe(
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  private getData() {
    return this.httpClient
      .get<IPlanetData[]>('/assets/planets.json');
  }


  getByName$(planetName: string): Observable<IPlanetData> {
    if (planetName === 'Earth') {
      return of({name:'Earth',distance:0});
    }
    return this.getAll()
      .pipe(map((planetList) => {
        return planetList.find((planet: IPlanetData) => {
          return planet.name === planetName;
        })
      }));
  }

  constructor(private httpClient: HttpClient) {
  }
}

