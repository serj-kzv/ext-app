import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export abstract class GenericApiService<T> {

    protected constructor() {
    }

    abstract getAll(): Observable<T[]>;
}
