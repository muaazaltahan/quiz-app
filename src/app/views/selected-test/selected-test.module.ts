import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedTestComponent } from './selected-test.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/state/selected-test/reducer';
import { QuestionComponent } from './question/question.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StartDialogComponent } from './start-dialog/start-dialog.component';
import { FinishDialogComponent } from './finish-dialog/finish-dialog.component';

@NgModule({
  declarations: [
    SelectedTestComponent,
    QuestionComponent,
    StartDialogComponent,
    FinishDialogComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('selectedTest',reducer),
    MatDialogModule
  ],
  exports: [
    SelectedTestComponent
  ]
})
export class SelectedTestModule { }
