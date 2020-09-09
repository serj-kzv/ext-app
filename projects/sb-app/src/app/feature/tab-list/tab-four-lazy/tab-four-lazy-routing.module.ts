import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabFourLazyComponent} from "./tab-four-lazy.component";

const routes: Routes = [
  {
    path: '',
    component: TabFourLazyComponent,
    canActivate: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabFourLazyRoutingModule { }
