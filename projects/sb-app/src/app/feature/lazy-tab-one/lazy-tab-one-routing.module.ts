import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LazyTabOneComponent} from "./lazy-tab-one.component";

const routes: Routes = [
  {
    path: '',
    component: LazyTabOneComponent,
    canActivate: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyTabOneRoutingModule { }
