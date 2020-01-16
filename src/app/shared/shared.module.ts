import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from './nav-button/nav-button.component';



@NgModule({
  declarations: [NavButtonComponent],
  exports: [NavButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
