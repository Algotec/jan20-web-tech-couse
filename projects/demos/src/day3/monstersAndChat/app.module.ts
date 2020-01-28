import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MonsterModule} from './monster/monster.module';
import {routes} from './app.routes';
import {ChatModule} from './chat/chat.module';
import {SharedModule} from './shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
	imports: [BrowserModule, BrowserAnimationsModule,RouterModule.forRoot(routes),MonsterModule, ChatModule, SharedModule,ToastrModule.forRoot()],       // module dependencies
	declarations: [AppComponent, HomeComponent],   // components and directives
	bootstrap: [AppComponent],     // root component
})
export class AppModule {
}

