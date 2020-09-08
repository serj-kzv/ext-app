import {NgModule} from '@angular/core';

import {TabListRoutingModule} from './tab-list-routing.module';
import {TabListComponent} from "./tab-list.component";
import {TabOneComponent} from './tab-one/tab-one.component';
import {TabTwoComponent} from './tab-two/tab-two.component';
import {TabThreeComponent} from './tab-three/tab-three.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [TabListComponent, TabOneComponent, TabTwoComponent, TabThreeComponent],
    imports: [
        SharedModule,
        TabListRoutingModule
    ]
})
export class TabListModule {
}
