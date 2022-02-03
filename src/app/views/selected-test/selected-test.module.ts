import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedTestComponent } from './selected-test.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/state/selected-test/reducer';

@NgModule({
  declarations: [
    SelectedTestComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('selectedTest',reducer)
  ],
  exports: [
    SelectedTestComponent
  ]
})
export class SelectedTestModule { }
