import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsViewComponent} from './planets-view/planets-view.component';
import {PlanetComponent} from './planet/planet.component';
import {RouterModule, Routes} from '@angular/router';
import {PlanetVisitComponent} from './planet-visit/planet-visit.component';
import {planetRouteData} from './common/common.types';
import {PlanetVisitFormComponent} from './planet-visit/planet-visit-form/planet-visit-form.component';


const planetRoutes: Routes = [
  {path: 'planets', component: PlanetsViewComponent},
  {path: `planet/:${planetRouteData}`, component: PlanetVisitComponent}
];

@NgModule({
  declarations: [PlanetsViewComponent, PlanetComponent, PlanetVisitComponent, PlanetVisitFormComponent],
  exports: [PlanetsViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(planetRoutes)
  ]
})
export class PlanetsModule {}
