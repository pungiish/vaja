import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

	@Input()
	data: number[];
	@Output()
	change = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
	}

	move(data) {
		this.change.emit(data);
	}

}
