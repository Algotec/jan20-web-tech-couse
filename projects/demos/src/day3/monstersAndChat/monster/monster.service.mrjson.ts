import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {MonsterModel, IMonsterOptions} from './monster.model';

@Injectable()
export class MonsterService {

  private baseUrl = 'http://mrjson.com/data/57926f22fd12d79d3a39aad6/monster/';

  constructor(private http: HttpClient) {
  }

  // query (GETs a list)
  query(): Promise<MonsterModel[]> {

    let prmMonsters = this.http.get<Array<IMonsterOptions>>(this.baseUrl + 'list.json')
      .toPromise()
      .then(res => {
        return res.map((jsonMonster: MonsterModel) =>
          new MonsterModel(jsonMonster))
      });

    prmMonsters.catch(err => {
      console.log('MonsterService::query - Problem talking to server');
    });

    return prmMonsters;
  }

  // get (GETs a single)
  get(id: number): Promise<MonsterModel> {
    let prmMonster = this.http.get(this.baseUrl + id + '.json')
      .toPromise()
      .then(jsonMonster => {
        return new MonsterModel(jsonMonster);
      });

    prmMonster.catch(err => {
      console.log('Problem talking to server');
    });
    return prmMonster;

  }

  // DELETE
  remove(id: number): Promise<MonsterModel[]> {
    let prmMonster = this.http.delete(this.baseUrl + id + '.json')
      .toPromise()
      .then(res => {
        return this.query();
      });

    prmMonster.catch(err => {
      console.log('Problem talking to server', err);
    });
    return prmMonster;
  }

  // save - Adds (POST) or update (PUT)
  save(monsterData: any, id?: number): Promise<MonsterModel> {

    let response: any;
    let prmMonster: Promise<MonsterModel>;

    if (id) {
      const url = this.baseUrl + id + '.json';
      response = this.http.put(url, monsterData)
    } else {
      const url = this.baseUrl + 'item.json';
      response = this.http.post(url, monsterData)
    }

    prmMonster = response.toPromise()
      .then((res: any) => {
        return new MonsterModel(res);
      });

    prmMonster.catch(err => {
      console.log('Problem talking to server', err);
    });
    return prmMonster;
  }
}
