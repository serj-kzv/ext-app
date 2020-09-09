import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabFiveLazyComponent} from "./tab-five-lazy.component";

const routes: Routes = [
  {
    path: '',
    component: TabFiveLazyComponent,
    canActivate: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabFiveLazyRoutingModule { }
