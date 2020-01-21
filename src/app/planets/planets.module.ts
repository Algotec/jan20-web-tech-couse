import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsViewComponent} from './planets-view/planets-view.component';
import {PlanetComponent} from './planet/planet.component';
import {RouterModule, Routes} from '@angular/router';
import {PlanetVisitComponent} from './planet-visit/planet-visit.component';
import {destinationPlanetRouteData, fromPlanetRouteData, planetRouteData, shipRouteData} from './common/common.types';
import {PlanetVisitFormComponent} from './planet-visit/planet-visit-form/planet-visit-form.component';
import {SharedModule} from '../shared/shared.module';
import {HeadquartersComponent} from './headquarters/headquarters.component';
import {SpaceshipsModule} from '../spaceships/spaceships.module';
import {PlanetJourneyComponent} from './planet-journey/planet-journey.component';
import {SpaceshipResolver} from '../spaceships/spaceship.resolver';
import {DestinationPlanetResolver, FromPlanetResolver} from './common/planet.resolver';
import {ShipPositionGuard} from '../spaceships/ship.position.guard';
import {JourneyDeactivationGuard} from './journeyDeactivationGuard';


const planetRoutes: Routes = [
  {path: 'planets', component: PlanetsViewComponent},
  {path: `planet/Earth`, component: HeadquartersComponent},
  {path: `planet/:${planetRouteData}`, component: PlanetVisitComponent},
  {
    path: `journey/:${shipRouteData}/from/:${fromPlanetRouteData}/to/:${destinationPlanetRouteData}`,
    canActivate: [ShipPositionGuard],
    canDeactivate:[JourneyDeactivationGuard],
    resolve: {
      ship: SpaceshipResolver,
      destinationPlanet: DestinationPlanetResolver,
      fromPlanet: FromPlanetResolver
    },
    component: PlanetJourneyComponent
  }
];

@NgModule({
  declarations: [PlanetsViewComponent, PlanetJourneyComponent, PlanetComponent, PlanetVisitComponent, PlanetVisitFormComponent, HeadquartersComponent],
  exports: [PlanetsViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(planetRoutes),
    SpaceshipsModule
  ]
})
export class PlanetsModule {}
