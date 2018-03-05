import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { Products, Cart } from "./models/Models";
import {AuthenticationService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard";
import {Users} from "./models/Users";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
    private model: Users = {username: '', password: ''};
    constructor(private router: Router, private authenticationService: AuthenticationService, private authGuard: AuthGuard){
    }

    getName() {
        return "Angular";
    }

    reroute(newRoute: string) {
        if (newRoute == "home") this.router.navigateByUrl('/', { skipLocationChange: false });
        if (newRoute == "products") this.router.navigateByUrl('/products', { skipLocationChange: false });
        if (newRoute == "create") this.router.navigateByUrl('/products/create', { skipLocationChange: false });
    }
    login() {
        console.log(this.model);
        this.authenticationService.login(this.model);
    }
    isNotConnected(){
        return !this.authGuard.isConnected();
    }
    isConnected(){
        return this.authGuard.isConnected();
    }
    logout(){
        this.authenticationService.logout();
        window.location.reload();
    }
    //private products: Products[] = JSON.parse(localStorage.getItem('cproducts')) ;
    setData() {
        // Permet de stocker les produits dans le localStorage afin d'y accéder partout sur le site
        let products: Products[] = [
            new Products(1, "Ordinateur portable", "src/assets/images/ordinateur.jpg", "Ordinateur de la marque Asus, quasiment neuf, excellent état.", 500),
            new Products(2, "Télévision", "src/assets/images/television.jpg", "Écran plasma acheté en 2003", 150)
        ];

        localStorage.setItem('products', JSON.stringify(products));
    }
}
    