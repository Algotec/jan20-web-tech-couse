import {NgModule} from '@angular/core';
import {SpaceshipsMarketComponent} from './spaceships-market/spaceships-market.component';
import {RouterModule, Routes} from '@angular/router';
import {SpaceshipsMarketContainer} from './spaceships-market-container/spaceships-market-container.component';
import {SharedModule} from '../shared/shared.module';
import {MyShipsComponent} from './my-ships/my-ships.component';
import {SpaceshipImageComponent} from './spaceship-image/spaceship-image.component';

const spaceshipRoutes: Routes = [{path: 'spaceships', component: SpaceshipsMarketContainer}];

@NgModule({
  declarations: [SpaceshipsMarketComponent, SpaceshipsMarketContainer, MyShipsComponent, SpaceshipImageComponent],
  exports: [SpaceshipsMarketContainer, MyShipsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(spaceshipRoutes)
  ]
})
export class SpaceshipsModule {}
