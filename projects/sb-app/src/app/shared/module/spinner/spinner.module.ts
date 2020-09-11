import {NgModule} from '@angular/core';
import {SpinnerDirective} from './spinner.directive';
import {SpinnerComponent} from "./spinner.component";
import {SharedModule} from "../../shared.module";


@NgModule({
  declarations: [SpinnerComponent, SpinnerDirective],
  imports: [
    SharedModule
  ],
  exports: [
      SpinnerComponent,
      SpinnerDirective
  ]
})
export class SpinnerModule { }
