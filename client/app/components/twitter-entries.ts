import {Component, Input, HostListener} from "@angular/core";
import TwitterEntry from "../models/twitter-entry";
import TwitterApiService from "../services/TwitterApiService";

@Component({
  selector: "twitter-entries",
  template: `
    <div class="mdl-grid">
      <div *ngFor="let entry of entries" class="mdl-cell mdl-cell--4-col">
        <div class="entry-card mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title" [style.backgroundImage]="entry.user?.profile_background_image_url ? 'url(' + entry.user?.profile_background_image_url + ')' : ''">
            <h2 class="entry-title mdl-card__title-text">{{entry.user?.name}} | <small>{{entry.user?.screen_name}}</small></h2>
          </div>
          <div class="mdl-card__supporting-text">
            {{entry.text}}
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a href="https://twitter.com/{{entry.user?.screen_name}}/status/{{entry.id_str}}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
    <div *ngIf="entries && entries.length">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col" style="text-align: center">
          <button (click)="loadMore()" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Load more...</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `.entry-card {
      width: auto !important;
    }
    .entry-title {
    background: #fff !important;
    padding: 0 4px;
    }
    .entry-title > small {
      font-size: 0.5em;
    }
    .mdl-card__title {
      min-height: 240px !important;
    }
    `
  ]
})
export default class TwitterEntriesComponent {
  @Input() entries: TwitterEntry[];

  constructor(private twitter: TwitterApiService) {}

  loadMore() {
    this.twitter
      .next()
      .subscribe(results => this.entries = this.entries.concat(results));
  }
}
