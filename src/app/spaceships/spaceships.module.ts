import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpaceshipsMarketComponent} from './spaceships-market/spaceships-market.component';
import {RouterModule, Routes} from '@angular/router';

const spaceshipRoutes:Routes = [{path:'spaceships',component:SpaceshipsMarketComponent}];
@NgModule({
  declarations: [SpaceshipsMarketComponent],
  exports:[SpaceshipsMarketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(spaceshipRoutes)
  ]
})
export class SpaceshipsModule { }
