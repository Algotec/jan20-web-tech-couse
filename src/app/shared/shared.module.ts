import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavButtonComponent} from './nav-button/nav-button.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [NavButtonComponent],
  exports: [NavButtonComponent, CommonModule, RouterModule],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule {}
