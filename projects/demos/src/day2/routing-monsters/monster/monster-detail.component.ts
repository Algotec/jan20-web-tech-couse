import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Monster, MonsterService} from './monster.service';
import {DialogService} from '../shared/dialog.service';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
	template: `
  <div *ngIf="_monster">

    <h3>"{{_editName}}"</h3>
    <div>
      <label>Id: </label>{{_monster.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="_editName" placeholder="Monster name"/>
    </div>
    <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
    <img src="img/monster/{{_monster.id}}.png" />
    <button (click)="gotoNext()">Go To Next montster</button>
  </div>
  `,
	styles: ['input {width: 20em}', 'img {margin:auto}']
})

export class MonsterDetailComponent implements OnInit, OnDestroy {

	private _monster: Monster;
	private _editName: string;
	private _sub: any;


	constructor(private _route: ActivatedRoute,
	            private _router: Router,
	            private _dialog: DialogService,
	            private _service: MonsterService) {
	}

	ngOnInit() {
		this._sub = this._route
			.params
			.subscribe(params => {
				let id = +params['id'];
				this._service.getMonster(id)
					.then(monster => {
						if (monster) {
							this._editName = monster.name;
							this._monster = monster;
						} else { // id not found
							this.gotoMonsters();
						}
					});
			});
	}

	ngOnDestroy() {
		if (this._sub) {
			this._sub.unsubscribe();
		}
	}

	cancel() {
		this.gotoMonsters();
	}

	save() {
		this._monster.name = this._editName;
		this.gotoMonsters();
	}

	gotoNext() {
		let monsterId = this._monster ? this._monster.id : null;
		this._router.navigate(['/monster', monsterId+1]);
	}

	gotoMonsters() {
		let monsterId = this._monster ? this._monster.id : null;
		// Pass along the monster id if available
		// so that the MonsterListComponent can select that monster.
		// Add a totally useless `foo` parameter for kicks.
		this._router.navigate(['/monster', {id: monsterId, foo: 'bar'}]);
	}

	canDeactivate(): Observable<boolean> | boolean {
		// Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
		if (!this._monster || this._monster.name === this._editName) {
			return true;
		}
		// Otherwise ask the user with the dialog service and return its
		// promise which resolves to true or false when the user decides
		let p = this._dialog.confirm('Discard changes?');
		let o = fromPromise(p);
		return o;
	}

}
