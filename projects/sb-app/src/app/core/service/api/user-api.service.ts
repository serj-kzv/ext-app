import {Injectable} from '@angular/core';
import {GenericApiService} from "./generic-api.service";
import {UserModel} from "../../../model/user.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UserApiService extends GenericApiService<UserModel> {

    constructor(private http: HttpClient) {
        super();
    }

    public getAll(): Observable<UserModel[]> {
        const path = browser.runtime.getURL('/sb-app/assets/fake-data/fake-user.json');

        return this.http.get<UserModel[]>(path).pipe(delay(1500));
    }

}
