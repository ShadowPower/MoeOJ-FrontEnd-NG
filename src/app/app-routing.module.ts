import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OjComponent } from './oj/oj.component';

const routes: Routes = [
  { path: '', component: OjComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
