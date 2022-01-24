import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [TestsComponent, TestComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TestsComponent
  ]
})
export class TestsModule { }
