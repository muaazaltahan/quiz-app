import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';
import { Test } from 'src/app/models/test';
import { getSelectedTest } from 'src/app/state/selected-test/reducer';

@Component({
  selector: 'app-selected-test',
  templateUrl: './selected-test.component.html',
  styleUrls: ['./selected-test.component.scss']
})
export class SelectedTestComponent implements OnInit,OnDestroy {

  constructor(private store: Store) { }

  timerSub: Subscription;
  timer = timer(0,1000);
  time = 0;

  test: Observable<Test> = this.store.select(getSelectedTest);

  startTimer() {
    this.timerSub = this.timer.subscribe(() => {
      this.time += 1000
    });
  }

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }

}
