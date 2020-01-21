import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import {NotificationsModule} from '../notifications/notifications.module';


@NgModule({
  declarations: [HeaderComponent, MainComponent],
  exports:[HeaderComponent,MainComponent],
  imports: [
    SharedModule,NotificationsModule

  ]
})
export class LayoutModule { }
