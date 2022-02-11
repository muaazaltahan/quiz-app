import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';
import { Test } from 'src/app/models/test';
import { getSelectedTest } from 'src/app/state/selected-test/reducer';
import { MatDialog } from '@angular/material/dialog';
import { StartDialogComponent } from './start-dialog/start-dialog.component';
import { FinishDialogComponent } from './finish-dialog/finish-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-test',
  templateUrl: './selected-test.component.html',
  styleUrls: ['./selected-test.component.scss']
})
export class SelectedTestComponent implements OnInit,OnDestroy {

  constructor(private store: Store, public dialog: MatDialog, private router: Router) { }

  test: Observable<Test> = this.store.select(getSelectedTest);

  timerSub: Subscription;
  timer = timer(0,1000);
  time = 0;

  closeStartDialogSub: Subscription;
  closeFinishDialogSub: Subscription;

  solvedQuestions: number[] = [];
  grades: number[] = [];
  grade: number = 0;

  startTimer() {
    this.timerSub = this.timer.subscribe(() => {
      this.time += 1000
    });
  }

  getGrade(id:number,grade: number) {
    if(!this.solvedQuestions.includes(id)){
      this.solvedQuestions.push(id);
      this.grades.push(grade);
      this.grade += grade;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(StartDialogComponent, {
      width: '268px',
      height: '200px'
    });
    this.closeStartDialogSub = dialogRef.afterClosed().subscribe(()=>{
      this.startTimer();
    });
  }

  finish() {
    const dialogRef = this.dialog.open(FinishDialogComponent, {
      width: '560px',
      height: '400px',
      data: {grade: this.grade, time: this.time}
    });
    this.timerSub.unsubscribe();
    this.closeFinishDialogSub = dialogRef.afterClosed().subscribe(()=>{
      this.router.navigate(['/tests']);
    });
  }

  ngOnInit(): void {
    this.openDialog();
  }

  ngOnDestroy(): void {
    if(this.timerSub){
      this.timerSub.unsubscribe();
    }
    if(this.closeFinishDialogSub){
      this.closeFinishDialogSub.unsubscribe();
    }
    this.closeStartDialogSub.unsubscribe();
  }

}
