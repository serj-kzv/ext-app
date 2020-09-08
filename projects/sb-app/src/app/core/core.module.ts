import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeaderComponent} from "./component/header/header.component";
import {FooterComponent} from "./component/footer/footer.component";
import {InitService} from "./service/init.service";


@NgModule({
    declarations: [
        // Components
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
    ],
    exports: [
        // Components
        HeaderComponent,
        FooterComponent,
    ],
    providers: [
        // Services
        InitService,

        // Guards
    ]
})
export class CoreModule {
}
