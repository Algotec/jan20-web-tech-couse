import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

export class Car {
	constructor(public id: number, public name: string) {
	}
}

const CARS = [
	new Car(1, 'Porche'),
	new Car(2, 'Toyota'),
	new Car(3, 'Peugeout'),
	new Car(4, 'Subaru')
];

@Injectable()
export class CarService {
	carsPromise: Promise<Car[]>// = Promise.resolve(CARS);

	constructor(private http: HttpClient) {

	}

	getCars() {
		//return this.carsPromise;
		if (!this.carsPromise) {
			this.carsPromise = this.http.get('assets/data/cars.json')
				.pipe(map((json: any) => json.data)).toPromise()

		}
		return this.carsPromise;
	}

	getCar(id: number | string) {
		return this.carsPromise
			.then(cars => cars.filter(car => car.id === +id)[0]);
	}
}


