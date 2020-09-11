import {Injectable} from '@angular/core';
import {from} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InitService {

    constructor() {
        this.init();
    }

    init() {
        this.logOnInit();
    }

    logOnInit() {
        if (browser) {
            console.log('=>>>>>> The app is run in a Web Extension environment!');
            console.log('browser api', browser);
            from(browser.tabs.query({})).subscribe(tabs => {
                console.log('tab list', tabs);
            });
        }
    }

}
