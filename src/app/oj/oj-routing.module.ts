/**
 * Created by nya on 2017/2/28.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProblemsetComponent } from './problemset/problemset.component'

export const ojRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'problemset', component: ProblemsetComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(ojRoutes) ],
  exports: [ RouterModule ]
})
export class OjRoutingModule {

}
