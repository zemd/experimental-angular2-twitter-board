import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'search-input',
  template: `
    <form>
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" ([ngModel])="search" (keyup)="onKeyUp($event)" placeholder="{{label}}...">
      </div>
    </form>
  `
})
export default class SearchInputComponent {
  @Input() search: string;
  @Output() onTerm: EventEmitter<string> = new EventEmitter<string>();
  @Input() inputId: string;
  @Input() label: string;

  onKeyUp(event:any) {
    this.onTerm.emit(event.target.value);
  }
}
