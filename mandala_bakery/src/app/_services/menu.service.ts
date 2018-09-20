import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class MenuService {
    constructor(private _http: Http) {

    }

    getAll() {
        return this._http.get('/menus').map((response: Response) => response.json());
    }


}