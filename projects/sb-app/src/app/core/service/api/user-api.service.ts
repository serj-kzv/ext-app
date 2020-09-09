import {Injectable} from '@angular/core';
import {GenericApiService} from "./generic-api.service";
import {UserModel} from "../../../model/user.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserApiService extends GenericApiService<UserModel> {

    constructor() {
        super();
    }

    getAll(): Observable<UserModel> {
        console.log(browser);
        return null;
    }
}
