import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Test } from 'src/app/models/test';
import { getTests } from 'src/app/state/tests/reducer';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent {

  constructor(private store: Store) { }

  tests: Observable<Test[]> = this.store.pipe(select(getTests));

}
