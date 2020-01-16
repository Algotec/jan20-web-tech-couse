import {ISpaceship} from '@algotec/spaceship-parts';

export const planetRouteData = 'planetName';
export type AU = number;

export interface IPlanetData {
  name: string;
  distance: AU;
}


export interface  Cords {
  x:number;
  y:number;
}
export interface ShipWithPosition {
  ship:ISpaceship,
  anchorPlanet:string;
  move:Cords;
}
