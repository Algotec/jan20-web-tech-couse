import {NgModule} from '@angular/core';
import {SpaceshipsMarketComponent} from './spaceships-market/spaceships-market.component';
import {RouterModule, Routes} from '@angular/router';
import {SpaceshipsMarketContainer} from './spaceships-market-container/spaceships-market-container.component';
import {SharedModule} from '../shared/shared.module';

const spaceshipRoutes: Routes = [{path: 'spaceships', component: SpaceshipsMarketContainer}];

@NgModule({
  declarations: [SpaceshipsMarketComponent, SpaceshipsMarketContainer],
  exports: [SpaceshipsMarketContainer],
  imports: [
    SharedModule,
    RouterModule.forChild(spaceshipRoutes)
  ]
})
export class SpaceshipsModule {}
