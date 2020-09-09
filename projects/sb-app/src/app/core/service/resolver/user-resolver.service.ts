import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserModel} from "../../../model/user.model";
import {UserApiService} from "../api/user-api.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserResolverService implements Resolve<UserModel> {

    constructor(private service: UserApiService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.service.getAll();
    }
}
