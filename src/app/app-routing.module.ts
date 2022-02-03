import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { AppPreloadingStrategyService } from './services/preloading-strategy.service';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { SelectedTestComponent } from './views/selected-test/selected-test.component';
import { TestsComponent } from './views/tests/tests.component';

const routes: Routes = [
  {path: '', component: BaseComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'tests', component: TestsComponent},
    {path: 'test/:id', component: SelectedTestComponent},
    {path: 'about', component: AboutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: AppPreloadingStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
