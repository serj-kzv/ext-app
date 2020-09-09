import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from "./shared/component/page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: 'tab-list',
        loadChildren: () => import('./feature/tab-list/tab-list.module').then(m => m.TabListModule)
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
