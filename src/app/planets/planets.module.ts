import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsViewComponent } from './planets-view/planets-view.component';
import { PlanetComponent } from './planet/planet.component';



@NgModule({
  declarations: [PlanetsViewComponent, PlanetComponent],
  exports:[PlanetsViewComponent],
  imports: [
    CommonModule
  ]
})
export class PlanetsModule { }
