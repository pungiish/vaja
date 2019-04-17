import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	data$: Observable<number>;
	data: number[];
	dataLeft: number[] = [];
	dataRight: number[] = [];
	constructor(private dataService: DataService) {
		this.dataService.getData()
			.subscribe(datas => this.data = datas);

	}

	ngOnInit() {
	}

	move(num) {
		const prompt = confirm('Premakni levo?');

		if (prompt === true) {
			this.dataLeft.push(num);
		} else {
			this.dataRight.push(num);
		}
		this.data = this.data.filter(((x) => {
			return x !== num;
		}));
	}

	moveLeft(e) {
		this.dataRight = this.filter(this.dataRight, e);
		this.dataLeft.push(e);
	}

	moveRight(e) {
		this.dataLeft = this.filter(this.dataLeft, e);
		this.dataRight.push(e);
	}

	filter(arr, num) {
		return arr.filter(x => x !== num);
	}
}
