import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';


@NgModule({
    declarations: [
        // Components
        PageNotFoundComponent

        // Directives
    ],
    imports: [
        // Angular
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Angular Material Modules
    ],
    exports: [
        // Angular Modules
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Components
        PageNotFoundComponent

        // Directives

        // Angular Material Modules

        // Covalent Modules
    ]
})
export class SharedModule {
}
