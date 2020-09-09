import {NgModule} from '@angular/core';

import {TabFourLazyRoutingModule} from './tab-four-lazy-routing.module';
import {TabFourLazyComponent} from './tab-four-lazy.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [TabFourLazyComponent],
  imports: [
    SharedModule,
    TabFourLazyRoutingModule
  ]
})
export class TabFourLazyModule { }
