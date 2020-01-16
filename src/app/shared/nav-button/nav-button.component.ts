import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button.nav-button',
  template: '<ng-content></ng-content>',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
