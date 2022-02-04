import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedTestComponent } from './selected-test.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/state/selected-test/reducer';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './question/answer/answer.component';

@NgModule({
  declarations: [
    SelectedTestComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('selectedTest',reducer)
  ],
  exports: [
    SelectedTestComponent,
    QuestionComponent,
    AnswerComponent
  ]
})
export class SelectedTestModule { }
