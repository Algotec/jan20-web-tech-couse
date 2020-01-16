import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPlanetData} from './common.types';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  async getAll(): Promise<IPlanetData[]> {
    const planets = await this.httpClient
      .get<IPlanetData[]>('/assets/planets.json')
      .toPromise();
    return planets;
  }


  getByName$(planetName: string): Promise<IPlanetData> {
    return this.getAll()
    .then((planetList) => {
      return planetList.find((planet: IPlanetData) => {
        return planet.name === planetName;
      })});

  }

  constructor(private httpClient: HttpClient) {
  }
}

