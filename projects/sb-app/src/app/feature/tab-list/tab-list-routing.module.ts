import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabListComponent} from "./tab-list.component";
import {TabOneComponent} from "./tab-one/tab-one.component";
import {TabTwoComponent} from "./tab-two/tab-two.component";
import {TabThreeComponent} from "./tab-three/tab-three.component";

const routes: Routes = [
    {
        path: '',
        component: TabListComponent,
        canActivate: [],
        children: [
            {
                path: '',
                canActivateChild: [],
                children: [
                    {path: 'tab-one', component: TabOneComponent},
                    {path: 'tab-two', component: TabTwoComponent},
                    {path: 'tab-three', component: TabThreeComponent},
                    {
                        path: '',
                        redirectTo: 'tab-one',
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabListRoutingModule {
}