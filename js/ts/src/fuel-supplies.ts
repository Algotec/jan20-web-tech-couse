/* tslint:disable */
import {IFuelSupply, Liters, LitersPerSecond, Octane, StartCallback, StopCallback} from './spaceship.interfaces';
import {ModernHyperDriveEngine, RocketEngine} from './engines';

//as constructor function
export function SolidFuelSupply(capacity: Liters): void {
}

SolidFuelSupply.prototype.pump = function pump(startCb: StartCallback) {
};

// or as a class
export class LiquidNitrogenFuelSupply implements IFuelSupply {
	constructor(capacity: Liters) {
	}
}

export class NuclearFuelSupply implements IFuelSupply {
	constructor(capacity: Liters) {
	}
}

export function makeRocketWithSolidFuel() {
	return new RocketEngine(
		new SolidFuelSupply(100));
}

export function makeRocketWithLiquidFuel() {
	return new RocketEngine(
		new LiquidNitrogenFuelSupply(50));
}

export function makeHyperDriveEngine() {
	return new ModernHyperDriveEngine(
		new NuclearFuelSupply(100));
}
