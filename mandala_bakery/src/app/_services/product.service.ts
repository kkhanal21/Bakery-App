import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class ProductService {
    constructor(private _http: Http) {

    }

    getAll(page) {
        return this._http.get('/products?page=' + page).map((response: Response) => response.json());
    }


}