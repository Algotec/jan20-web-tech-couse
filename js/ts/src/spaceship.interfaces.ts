export enum Complexity {
  VERY_LOW = 1,
  LOW,
  MEDIUM,
  HIGH,
  SUPER_HIGH
}

export interface HasPrice {
  readonly price: Dollars;
}

// tslint:disable-next-line:interface-over-type-literal
export type HasComplexity = {
  readonly complexity: Complexity;
};

export interface ISpaceship extends HasPrice, HasComplexity {
  readonly engine: IEngine;
  readonly name: string;
  readonly maxLoad: Kilograms;
  currentLoad: Kilograms;
}

export interface SpaceShipFactory<T extends ISpaceship = any> extends HasPrice, HasComplexity {
  new(engine?: IEngine): T
}

export interface EngineFactory<T extends IEngine = any> extends HasPrice, HasComplexity {
  new(fuelSupply: IFuelSupply): T;
}

export type Dollars = number;
export type Kilograms = number;
export type Liters = number;
export type LitersPerSecond = number;
export type Octane = number;

export interface IEngine extends HasPrice, HasComplexity {
  readonly maxSpeed: number;
  readonly fuelSupply: IFuelSupply;
  started: boolean;

  start(): Promise<void>;

  stop(): Promise<void>;
}

export type StopCallback = () => Error | null;
export type StartCallback = (err: Error | null, stopCb: StopCallback) => void;

export interface IFuelSupply {
  capacity: Liters;
  potency: Octane;
  flow: LitersPerSecond;
  onFuelEnd: Array<() => void>;
  fuelLeft: Liters;


  pump(startCb: StartCallback): void;

}

export interface fuelSupplyFactory<T extends IFuelSupply = any> {
  new(capacity:Liters): T;
}
export class OverWeightError extends Error {}

