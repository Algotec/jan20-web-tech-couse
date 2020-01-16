import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer} from './customer.interface';

@Component({
	selector: 'app',
	templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
	public myForm: FormGroup;

	constructor(private _fb: FormBuilder) {
	}

	ngOnInit() {
		this.myForm = this._fb.group({
			name: ['', [Validators.required, Validators.minLength(5)]],
			addresses: this._fb.array([
				this.initAddress(),
			])
		});
	}

	initAddress() {
		return this._fb.group({
			street: ['', Validators.required],
			postcode: ['']
		});
	}

	addAddress() {
		const control = <FormArray>this.myForm.get('addresses');
		control.push(this.initAddress());
	}

	removeAddress(i: number) {
		const control = <FormArray>this.myForm.get('addresses');
		control.removeAt(i);
	}

	save(model: Customer) {
		// call API to save
		// ...
		console.log(model);
	}
}
