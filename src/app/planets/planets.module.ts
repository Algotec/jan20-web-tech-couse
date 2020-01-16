import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsViewComponent} from './planets-view/planets-view.component';
import {PlanetComponent} from './planet/planet.component';
import {RouterModule, Routes} from '@angular/router';


const planetRoutes: Routes = [{path: 'planets', component: PlanetsViewComponent}];

@NgModule({
  declarations: [PlanetsViewComponent, PlanetComponent],
  exports: [PlanetsViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(planetRoutes)
  ]
})
export class PlanetsModule {}
