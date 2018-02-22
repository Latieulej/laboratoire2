import { Component } from '@angular/core';
import {AuthenticationService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {Users} from "../models/Users";
import {AuthGuard} from "../auth/auth-guard";
import { Products } from "../models/Models";
//import { ProductsComponent } from "../products/products.component";

@Component({
    selector : 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})


export class HomeComponent {
    private model: Users = {username: '', password: ''};

    constructor(private router: Router, private authenticationService: AuthenticationService, private authGuard: AuthGuard){
        }
        private products: Products[] = [
            new Products(1,"Ordinateur portable","img1.jpg","Ordinateur de la marque Asus, quasiment neuf, excellent état.",500),
            new Products(2,"Télévision","img2.jpg","Écran plasma acheté en 2003",150)
        ];

    reroute(newRoute: string) {
        if (newRoute == "home") this.router.navigateByUrl('/', { skipLocationChange: false });
        if (newRoute == "cart") this.router.navigateByUrl('/cart', { skipLocationChange: false });
    }

    login() {
        console.log(this.model);
        this.authenticationService.login(this.model);
    }

    getHome() : string {
        return "Catalogue";
    }
    isNotConnected(){
        return !this.authGuard.isConnected();
    }
}