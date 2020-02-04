import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {PlanetsModule} from './planets/planets.module';
import {HttpClientModule} from '@angular/common/http';
import {SpaceshipsModule} from './spaceships/spaceships.module';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers, reducersToken, reducersFactory} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutModule, PlanetsModule, SpaceshipsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducersToken, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [{provide: reducersToken, useFactory: reducersFactory}],
  bootstrap: [AppComponent]
})
export class AppModule {}
