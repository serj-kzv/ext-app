import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {UserModel} from "../../model/user.model";
import {Observable} from "rxjs";
import {filter} from "rxjs/operators";

@Component({
    selector: 'app-tab-list',
    templateUrl: './tab-list.component.html',
    styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {

    title = 'app-tab-list';

    users: UserModel[];

    navStart: Observable<NavigationStart>;

    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.navStart = router.events.pipe(
            filter(evt => evt instanceof NavigationStart)
        ) as Observable<NavigationStart>;
    }

    ngOnInit(): void {
        this.navStart.subscribe(evt => console.log('Navigation Started!'));
        this.users = this.route.snapshot.data.users.users;
        console.log('users', this.users);
    }

}
