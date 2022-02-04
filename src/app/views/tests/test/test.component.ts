import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Test } from 'src/app/models/test';
import { setSelectedTest } from 'src/app/state/selected-test/actions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(private router: Router, private store: Store) {}

  @Input() test: Test;

  goToTest(test: Test) {
    this.store.dispatch(setSelectedTest({test}))
    this.router.navigate([`tests/${test.id}`]);
  }

}
