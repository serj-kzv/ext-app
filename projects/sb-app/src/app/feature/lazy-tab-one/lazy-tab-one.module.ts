import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {LazyTabOneComponent} from "./lazy-tab-one.component";
import {LazyTabOneRoutingModule} from "./lazy-tab-one-routing.module";


@NgModule({
  declarations: [LazyTabOneComponent],
  imports: [
    SharedModule,
    LazyTabOneRoutingModule
  ]
})
export class LazyTabOneModule { }
