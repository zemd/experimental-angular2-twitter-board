import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import TwitterEntry from "../models/twitter-entry";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export default class TwitterApiService {

  private lastSearchedTerm: string;
  private nextResults: string;

  constructor(private http: Http) {
  }

  next() {
    if (!this.nextResults) {
      return Observable.empty();
    }
    return this.doSearch(this.nextResults);
  }

  search(term: string, count: number = 100): Observable<TwitterEntry[]> {
    this.lastSearchedTerm = term;
    let search = `?q=${encodeURIComponent(this.lastSearchedTerm)}&count=${count}`;

    return this.doSearch(search);
  }

  private doSearch(query) {
    return this.http
      .get(`/search${query}`)
      .map(result => result.json())
      .map(results => {
        this.nextResults = results['search_metadata']['next_results'];
        return results['statuses'];
      });
  }
}
