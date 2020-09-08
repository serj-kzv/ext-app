import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from "./shared/component/page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: 'tab-list',
        loadChildren: () => import('./feature/tab-list/tab-list.module').then(m => m.TabListModule)
    },
    {
        path: 'lazy-tab-one',
        loadChildren: () => import('./feature/lazy-tab-one/lazy-tab-one.module').then(m => m.LazyTabOneModule)
    },
    {
        path: 'lazy-tab-two',
        loadChildren: () => import('./feature/lazy-tab-two/lazy-tab-two.module').then(m => m.LazyTabTwoModule)
    },
    {path: '', redirectTo: 'tab-list', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
