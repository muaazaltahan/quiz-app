import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { load } from './state/tests/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(load());
  }
}
