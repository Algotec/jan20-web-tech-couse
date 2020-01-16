import {Injectable} from '@angular/core';
import {MonsterModel} from './monster.model';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MonsterService {

	private baseUrl = 'http://localhost:3003/data/monster/';

	constructor(private http: HttpClient) {
	}


	public get url() {
		return this.baseUrl;
	}

	// query (GETs a list)
	query(): Promise<MonsterModel[]> {

		return this.http.get(this.baseUrl)
			.toPromise()
			.then((res: any) => {
				return res.map((jsonMonster: any) =>
					new MonsterModel(jsonMonster));
			}).catch(err => {
				console.log('MonsterService::query - Problem talking to server');
				throw err;
			});
	}

	// get (GETs a single)
	get(id: string): Promise<MonsterModel | void> {
		return this.http.get(this.baseUrl + id)
			.toPromise()
			.then((res: any) => {
				return new MonsterModel(res);
			}).catch(err => {
				console.log('MonsterService::get - Problem talking to server');
			});

	}

	// DELETE
	remove(id: string): Promise<MonsterModel[]> {
		let prmMonster = this.http.delete(this.baseUrl + id)
			.toPromise()
			.then((res: any) => {
				return this.query();
			});

		prmMonster.catch(err => {
			console.log('MonsterService::remove - Problem talking to server', err);
		});
		return prmMonster;
	}

	// save - Adds (POST) or update (PUT)
	save(monsterData: any, id?: string): Promise<MonsterModel> {

		let response: any;
		let prmMonster: Promise<MonsterModel>;

		if (id) {
			const url = this.baseUrl + id;
			response = this.http.put(url, monsterData);
		} else {
			const url = this.baseUrl;
			response = this.http.post(url, monsterData);
		}

		prmMonster = response.toPromise()
			.then((res: any) => {
				return new MonsterModel(res);
			});

		prmMonster.catch(err => {
			console.log('MonsterService::save - Problem talking to server', err);
		});
		return prmMonster;
	}
}
