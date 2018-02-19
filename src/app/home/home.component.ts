import { Component } from '@angular/core';
import {AuthenticationService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {Users} from "../models/Users";
import {AuthGuard} from "../auth/auth-guard";

@Component({
    selector : 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
    private model: Users = {username: '', password: ''};

    constructor(private router: Router, private authenticationService: AuthenticationService, private authGuard: AuthGuard){
        }

    login() {
        console.log(this.model);
        this.authenticationService.login(this.model);
    }

    getHome() : string {
        return "Login";
    }

    isNotConnected(){
        return !this.authGuard.isConnected();
    }
}