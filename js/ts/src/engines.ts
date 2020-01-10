import {Complexity, Dollars, EngineFactory, IEngine, IFuelSupply, Liters, StopCallback} from './spaceship.interfaces';

export abstract class BaseEngine implements IEngine {
	protected constructor(public fuelSupply: IFuelSupply) {
	}

}


export class RocketEngine extends BaseEngine {

}

export class SmartRocketEngine extends BaseEngine {

}

export class ModernHyperDriveEngine extends BaseEngine {

}
