import {EngineFactory, fuelSupplyFactory, IEngine, IFuelSupply, Liters, SpaceShipFactory} from './spaceship.interfaces';

export interface ISpaceShipOrder{

  spaceShip :SpaceShipFactory<any>
  engine:EngineFactory,
  fuelSupply:fuelSupplyFactory
  fuelCapacity:Liters

}

/*
* Typescript drill:
*
* write an entity (class/function) which takes the order and converts it to a spaceship, the constuction time should adhere to this logic
*
* COMPLEXTIY = * 1 sec (VERY_LOW is delayed in one second, SUPER_HIGH in 5)
* make sure to add both engine and ship complexity
* fuel capacity - 5 ms for each liter
*
*
* */

