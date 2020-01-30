import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavButtonComponent} from './nav-button/nav-button.component';
import {RouterModule} from '@angular/router';
import {TrendyInputComponent} from './trendy-input/trendy-input.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [TrendyInputComponent, NavButtonComponent],
  exports: [NavButtonComponent, TrendyInputComponent, CommonModule, RouterModule,ReactiveFormsModule],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule {}
