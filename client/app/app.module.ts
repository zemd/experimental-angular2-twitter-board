import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}   from './app.component';
//import {RouterModule} from "@angular/router";

import SearchInputComponent from "./components/search-input";
import SearchInputContainer from "./containers/search-input";

import TwitterApiService from "./services/TwitterApiService";
import TwitterEntriesComponent from "./components/twitter-entries";
import {HttpModule} from "@angular/http";


@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule],
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchInputContainer,
    TwitterEntriesComponent
  ],
  bootstrap: [AppComponent],
  providers: [TwitterApiService]
})
export class AppModule {
}
