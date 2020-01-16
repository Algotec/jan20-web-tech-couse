import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class WikipediaService {
	constructor(private http: HttpClient) {

	}


	search(term: string) {
		console.log('Looking!!!');
		const search = new HttpParams({
			fromObject: {
				action: 'opensearch',
				search: term,
				format: 'json'
			}
		});
		return this.http
			.jsonp(`http://en.wikipedia.org/w/api.php?${search.toString()}`,'callback')
			.toPromise()
			.then((request) => request[1]);
	}
}
