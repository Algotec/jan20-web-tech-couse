import {NgModule} from '@angular/core';
import {SpaceshipsMarketComponent} from './spaceships-market/spaceships-market.component';
import {RouterModule, Routes} from '@angular/router';
import {SpaceshipsMarketContainer} from './spaceships-market-container/spaceships-market-container.component';
import {SharedModule} from '../shared/shared.module';
import {MyShipsComponent} from './my-ships/my-ships.component';
import {SpaceshipImageComponent} from './spaceship-image/spaceship-image.component';
import {StoreModule} from '@ngrx/store';
import {spaceShipReducer} from './state/spaceships.state';
import {Effect, EffectsModule} from '@ngrx/effects';
import {SpaceshipEffects} from './state/spaceship.effects';

const spaceshipRoutes: Routes = [{path: 'spaceships', component: SpaceshipsMarketContainer}];

@NgModule({
  declarations: [SpaceshipsMarketComponent, SpaceshipsMarketContainer, MyShipsComponent, SpaceshipImageComponent],
  exports: [SpaceshipsMarketContainer, MyShipsComponent, SpaceshipImageComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature('spaceships',spaceShipReducer),
    EffectsModule.forFeature([SpaceshipEffects]),
    RouterModule.forChild(spaceshipRoutes)
  ]
})
export class SpaceshipsModule {}
