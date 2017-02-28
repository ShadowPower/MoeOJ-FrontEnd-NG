import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OjComponent } from './oj/oj.component';
import { ojRoutes } from './oj/oj-routing.module';

const routes: Routes = [
  { path: '', component: OjComponent, children: ojRoutes },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
