import {ISpaceship} from '@algotec/spaceship-parts';

export const destinationPlanetRouteData = 'toPlanetName';
export const fromPlanetRouteData = 'fromPlanetName';
export const shipRouteData = 'ship';
export type AU = number;

export interface IPlanetData {
  name: string;
  distance?: AU;
}


export interface Cords {
  x: number;
  y: number;
}

export interface ShipWithPosition {
  ship: ISpaceship,
  anchorPlanet: string;
  move: Cords;
}

export interface IPlanetSample {
  label: string;
  weight: number;
  cords: Cords | string;
}

export interface IPlanetFormData {
  astronautName: string;
  date: string;
  samples: IPlanetSample[];
}
