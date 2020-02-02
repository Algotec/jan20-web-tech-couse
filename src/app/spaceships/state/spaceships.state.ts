import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {IEngine, IFuelSupply, ISpaceship} from 'js/ts/dist/index';
import {Type} from '@angular/core';
import {assignShip, buySpaceship, createSpaceshipSuccess, refuelSpaceship, spaceshipLost, unassignShip} from './spaceship.actions';
import {ShipWithPosition} from '../../planets/common/common.types';

export interface ISpaceshipsState {
  ships: { [key: number]: ISpaceship };
  positions: { [key: number]: Omit<ShipWithPosition, 'ship'> }
}

const spaceshipsInitialState: ISpaceshipsState = {
  ships: {},
  positions: {}
};
const onAddShip = (state, action: { ship: ISpaceship, anchorPlanet?: string }) => {
  const oldShips = state.ships;
  const newIndex = Object.keys(oldShips).length;
  const ships = {...oldShips, [newIndex]: action.ship};
  const oldPositions = state.positions;
  const positions = {
    ...oldPositions, [newIndex]: {
      anchorPlanet: action.anchorPlanet ? action.anchorPlanet : 'Earth',
      move: {x: 0, y: 0}
    }
  };
  return {...state, positions, ships}
};

function refuelShip(thisShip: ISpaceship) {
  const constructor = thisShip.constructor as Type<ISpaceship>;
  const engineConstructor = thisShip.engine.constructor as Type<IEngine>;
  const fuelSupplyConstructor = thisShip.engine.fuelSupply.constructor as Type<IFuelSupply>;
  const newEngine = new engineConstructor(new fuelSupplyConstructor(thisShip.engine.fuelSupply.capacity));
  const refueledShip = new constructor(newEngine);
  refueledShip.currentLoad = thisShip.currentLoad;
  return refueledShip;
}

const onRefuelShip = on(refuelSpaceship, (state: ISpaceshipsState, action) => {
  const oldShips = state.ships;
  let thisShip = oldShips[action.shipId];
  if (thisShip) {
    oldShips[action.shipId] = refuelShip(thisShip);
  }
  return {...state, ships: {...oldShips}};
});
const onAssignShip = on(assignShip, (state: ISpaceshipsState, action) => {
  state = {...state, positions: {...state.positions, [action.shipId]: {anchorPlanet: action.destination, move: {x: 0, y: 0}}}}
  return state;
});
const onUnassignShip = on(unassignShip, (state: ISpaceshipsState, action) => {
    if (state.positions[action.shipId]) {
      const {[action.shipId]: removedShip, ...newAssignments} = state.positions;
      state = {...state, positions: newAssignments}
    }
    return state;
  }
);

const spaceshipsInternalReducer = createReducer(spaceshipsInitialState,
  on(createSpaceshipSuccess, onAddShip),
  on(spaceshipLost, (state, action) => {
    const {[action.shipId]: oldShips, ...otherShips} = state.ships;
    return {...state, ships: otherShips}
  }),
  onRefuelShip,
  onAssignShip,
  onUnassignShip
);

export function spaceShipReducer(state: ISpaceshipsState, action: Action) {
  return spaceshipsInternalReducer(state, action);
}

export const SPACESHIPS_FEATURE_NAME = 'spaceships';
export const SpaceshipsStateSelector = createFeatureSelector<ISpaceshipsState>(SPACESHIPS_FEATURE_NAME);
export const spaceShipsOwnedSelector = createSelector(SpaceshipsStateSelector, (state) => state.ships);
export const spaceShipsPositionsSelector = createSelector(SpaceshipsStateSelector, (state) => state.positions);
export const spaceShipsWithPositionSelector = createSelector(spaceShipsOwnedSelector, spaceShipsPositionsSelector, (ships, positions) => {
  let retVal: Partial<{ [shipId: string]: Partial<ShipWithPosition> }> = {...positions};
  return Object.entries(ships).reduce((acc, [shipId, ship]) => {
    const descObj = acc[shipId] ? {...acc[shipId]} : {};
    descObj.ship = ship;
    acc[shipId] = descObj;
    return acc;
  }, retVal)
});

export const spaceShipWithPositionSelector = createSelector(spaceShipsOwnedSelector, spaceShipsPositionsSelector, (allShips, allpositions, {id}: { id: number }) => {
  const ship = allShips[id];
  const position = allpositions[id];
  if (ship && position) {
    return {...position, ship} as ShipWithPosition;
  }
});
