import {NgModule} from '@angular/core';
import {SpaceshipsMarketComponent} from './spaceships-market/spaceships-market.component';
import {RouterModule, Routes} from '@angular/router';
import {SpaceshipsMarketContainer} from './spaceships-market-container/spaceships-market-container.component';
import {SharedModule} from '../shared/shared.module';
import { PlanetSpaceshipsContainerComponent } from './planet-spaceships-container/planet-spaceships-container.component';
import { SpaceshipIconComponent } from './spaceship-icon/spaceship-icon.component';

const spaceshipRoutes: Routes = [{path: 'spaceships', component: SpaceshipsMarketContainer}];

@NgModule({
  declarations: [SpaceshipsMarketComponent, SpaceshipsMarketContainer, PlanetSpaceshipsContainerComponent, SpaceshipIconComponent],
  exports: [SpaceshipsMarketContainer,PlanetSpaceshipsContainerComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(spaceshipRoutes)
  ]
})
export class SpaceshipsModule {}
