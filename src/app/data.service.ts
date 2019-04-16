import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor() { }

	getData(): Observable<number[]> {
		const data = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		return data;
	}
}
