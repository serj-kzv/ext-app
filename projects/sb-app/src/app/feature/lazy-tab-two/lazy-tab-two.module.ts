import {NgModule} from '@angular/core';
import {LazyTabTwoComponent} from './lazy-tab-two.component';
import {SharedModule} from "../../shared/shared.module";
import {LazyTabTwoRoutingModule} from "./lazy-tab-two-routing.module";


@NgModule({
  declarations: [LazyTabTwoComponent],
  imports: [
    SharedModule,
    LazyTabTwoRoutingModule
  ]
})
export class LazyTabTwoModule { }
