import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Test } from 'src/app/models/test';
import { getSelectedTest } from 'src/app/state/selected-test/reducer';

@Component({
  selector: 'app-selected-test',
  templateUrl: './selected-test.component.html',
  styleUrls: ['./selected-test.component.scss']
})
export class SelectedTestComponent {

  constructor(private store: Store) { }

  test: Observable<Test> = this.store.select(getSelectedTest);

}
