import {Component} from '@angular/core';
import TwitterEntry from "./models/twitter-entry";

@Component({
  selector: 'search-app',
  template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout__title">Twitter sample</span>
            <div class="mdl-layout-spacer"></div>
            <search-input-container (search)="onSearch($event)"></search-input-container>
        </div>
      </header>
      
      <main class="mdl-layout__content">
        <div class="page-content">
          <twitter-entries [entries]="entries"></twitter-entries>
        </div>
      </main>
    </div>
  `
})
export class AppComponent {
  entries: TwitterEntry[];

  onSearch(results: TwitterEntry[]) {
    this.entries = results;
  }
}
