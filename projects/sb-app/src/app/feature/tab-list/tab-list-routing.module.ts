import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabListComponent} from "./tab-list.component";
import {TabOneComponent} from "./tab-one/tab-one.component";
import {TabTwoComponent} from "./tab-two/tab-two.component";
import {TabThreeComponent} from "./tab-three/tab-three.component";
import {UserResolverService} from "../../core/service/resolver/user-resolver.service";

const routes: Routes = [
    {
        path: '',
        component: TabListComponent,
        canActivate: [],
        resolve: {
          users: UserResolverService
        },
        children: [
            {path: 'tab-one', component: TabOneComponent},
            {path: 'tab-two', component: TabTwoComponent},
            {path: 'tab-three', component: TabThreeComponent},
            {
                path: 'tab-four-lazy',
                loadChildren: () => import('./tab-four-lazy/tab-four-lazy.module').then(m => m.TabFourLazyModule)
            },
            {
                path: 'tab-five-lazy',
                loadChildren: () => import('./tab-five-lazy/tab-five-lazy.module').then(m => m.TabFiveLazyModule)
            },
            {
                path: '',
                redirectTo: 'tab-one',
                pathMatch: 'full'
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
