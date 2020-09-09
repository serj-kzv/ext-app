import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../model/user.model";

@Component({
    selector: 'app-tab-list',
    templateUrl: './tab-list.component.html',
    styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {

    title = 'app-tab-list';

    users: UserModel[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.users = this.route.snapshot.data.users.users;
        console.log('users', this.users);
    }

}
