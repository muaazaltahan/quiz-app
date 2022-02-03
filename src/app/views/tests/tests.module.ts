import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';
import { TestComponent } from './test/test.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/state/tests/reducer';
import { EffectsModule } from '@ngrx/effects';
import { TestsEffects } from 'src/app/state/tests/effects';


@NgModule({
  declarations: [TestsComponent, TestComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('tests', reducer),
    EffectsModule.forFeature([TestsEffects])
  ],
  exports: [
    TestsComponent,
    TestComponent
  ]
})
export class TestsModule { }
