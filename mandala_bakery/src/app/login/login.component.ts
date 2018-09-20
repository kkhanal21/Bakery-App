import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AlertService, AuthenticationService, UserService } from "../_services/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  returnUrl: String;
  constructor(private route: ActivatedRoute, private router: Router, private alertService: AlertService, private authenticationService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
    //reset login status
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        //login success
        this.router.navigate([this.returnUrl]);
      },
      error => {
        //login failed
        this.alertService.error(error);
        this.loading = false;
      });
  }

}

