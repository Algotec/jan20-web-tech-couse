import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'template-form-edit',
	styleUrls: ['templateforms.css'],
	templateUrl: 'templateform.html'
})
export class TemplateFormComponent implements OnInit {
	user: any;

	constructor() {
	}

	ngOnInit() {
		this.user = {
			firstName: 'John',
			lastName: 'Smith',
			username: 'has_2wayBinding',
		}

	}

	onSubmit(form) {
		console.log(form.value);
	}

}
