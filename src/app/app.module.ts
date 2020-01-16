import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {PlanetsModule} from './planets/planets.module';
import {HttpClientModule} from '@angular/common/http';
import {SpaceshipsModule} from './spaceships/spaceships.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutModule,PlanetsModule,SpaceshipsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
