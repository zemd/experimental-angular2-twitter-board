import {Component, Input, Output, EventEmitter} from "@angular/core";
import TwitterApiService from "../services/TwitterApiService";
import {Subject, Observable} from "rxjs";
import TwitterEntry from "../models/twitter-entry";

@Component({
  selector: 'search-input-container',
  template: `
    <search-input [search]="search" inputId="g-input-search" label="Search tweets" (onTerm)="onTerm($event)"></search-input>
  `
})
export default class SearchInputContainer {
  @Input() term: string;
  @Output() search: EventEmitter<TwitterEntry[]> = new EventEmitter<TwitterEntry[]>();

  searchTermStream: Subject<string> = new Subject<string>();

  constructor(private twitter: TwitterApiService) {
    this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.twitter.search(term))
      .subscribe((results: TwitterEntry[]) => this.search.emit(results));
  }

  onTerm(term: string) {
    if (term) {
      this.searchTermStream.next(term);
    }
  }
}
