import {NgModule} from '@angular/core';

import {TabFiveLazyRoutingModule} from './tab-five-lazy-routing.module';
import {TabFiveLazyComponent} from './tab-five-lazy.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [TabFiveLazyComponent],
  imports: [
    SharedModule,
    TabFiveLazyRoutingModule
  ]
})
export class TabFiveLazyModule { }
