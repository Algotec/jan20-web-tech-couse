import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SharedModule} from './shared/shared.module';
import {CarsModule} from './car/car.module';
import {BrowserModule} from '@angular/platform-browser';
import {MonstersModule} from './monster/monster.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [BrowserModule,MonstersModule, SharedModule, CarsModule, RouterModule.forRoot(routes), HttpClientModule],
    declarations: [AppComponent, HomeComponent, LoginComponent], //CarDetailComponent,CarListComponent
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
