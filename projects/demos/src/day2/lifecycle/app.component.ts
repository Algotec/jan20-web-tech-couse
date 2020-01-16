import {Component} from '@angular/core';
import {ItemsService} from './cart/cart.service';


/***************************************/

/*
 template: `

 `,
 */

@Component({
	selector: 'app',
	template: `
      <peek-a-boo-parent></peek-a-boo-parent>
      <do-check-parent></do-check-parent>
      <!--<cart-badge [itemStream]="itemsService.items$"></cart-badge>-->
      <!--<button (click)="addItem()" >Add Item</button>-->

      <!--<on-changes-parent></on-changes-parent>-->
      <!--<after-view-parent></after-view-parent>-->
      <!--<after-content-parent></after-content-parent>-->
      <!--<spy-parent></spy-parent>-->
      <!--<counter-parent></counter-parent>-->
	`,

})
export class AppComponent {
	constructor(private itemsService: ItemsService) {

	}

	addItem() {
		console.log('OK adding');
		this.itemsService.add({name: 'Lala'});
	}


}

