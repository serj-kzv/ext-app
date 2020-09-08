import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LazyTabTwoComponent} from "./lazy-tab-two.component";

const routes: Routes = [
  {
    path: '',
    component: LazyTabTwoComponent,
    canActivate: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyTabTwoRoutingModule { }
