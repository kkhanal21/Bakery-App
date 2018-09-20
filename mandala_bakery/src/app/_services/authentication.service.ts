import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: String, password: String) {
        return this.http.post('/users/authenticate', { username: username, password: password })
            .map((response: Response) => {
                //login successful if there is jwt token
                let user = response.json();
                if (user && user.token) {
                    //store user details and jwt token in local storage  to keep the user logged in between the page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        //remove user from the local storage
        localStorage.removeItem('currentUser');
    }


}