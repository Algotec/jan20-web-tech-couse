import {Complexity, Dollars, IEngine, ISpaceship, Kilograms} from './spaceship.interfaces';
import {makeHyperDriveEngine, makeRocketWithLiquidFuel, makeRocketWithSolidFuel} from './fuel-supplies';

export abstract class BaseSpaceShip implements ISpaceship {
  constructor(public engine: IEngine) {
  }
}

export class Appolo extends BaseSpaceShip implements ISpaceship {
  constructor(engine = makeRocketWithSolidFuel()) {
    super(engine);
  }
}

export class Genesis extends BaseSpaceShip implements ISpaceship {
  constructor(engine = makeRocketWithLiquidFuel()) {
    super(engine);
  }
}

export class Enterprise extends BaseSpaceShip implements ISpaceship {
  constructor(engine = makeHyperDriveEngine()) {
    super(engine);
  }
}
