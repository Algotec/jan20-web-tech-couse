import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPlanetData, IPlanetFormData} from './common.types';
import {Observable, of} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {BankService} from '../../shared/bank/bank.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private cache$: Observable<IPlanetData[]>;
  // see https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html
  // on approaches on how to make this generic and declarative
  // PACS's ng-store-infra has a built in http cache service

  private spaceSamples: { [key: string]: IPlanetFormData[] } = {};

  addSampleForm(planet: string, sample: IPlanetFormData) {
    if (!Array.isArray(this.spaceSamples[planet])) {
      this.spaceSamples[planet] = [sample];
    } else {
      this.spaceSamples[planet].push(sample);
    }
    const reward = getLoad(sample.samples, (sample) => sample.weight) * 50000;
    this.bank.deposit(reward);
  }

  getSampleCountForPlanet(planet: string) {
    return Array.isArray(this.spaceSamples[planet]) ? this.spaceSamples[planet].length : 0;
  }

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

  constructor(private httpClient: HttpClient,private bank:BankService) {
  }

}

export function getLoad<T = number>(controls: T[], valueGetter: (T) => string = (v) => v) {
  return controls.reduce((acc, sample: T) => {
    acc = acc + parseFloat(valueGetter(sample));
    return acc;
  }, 0);
}
