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

    setData() {
        // Permet de stocker les produits dans le localStorage afin d'y accéder partout sur le site
        let products: Products[] = [
            new Products(1, "Ordinateur portable", "src/assets/images/ordinateur.jpg", "Ordinateur de la marque Asus, quasiment neuf, excellent état.", 500),
            new Products(2, "Télévision", "src/assets/images/television.jpg", "Écran plasma acheté en 2003", 150),
            new Products(3,"Cheval de course","src/assets/images/cheval.jpg","Avance et mange beaucoup.",500000),
            new Products(4, "Fleur en plastique","src/assets/images/fleur.jpg","Un peu poussiéreuse.",5),
            new Products(5, "Lit Queen Size","src/assets/images/lit.jpg","Lit plus que confortable, idéal pour les grasses matinée.",432),
            new Products(6, "Lampe","src/assets/images/lampe.jpg","Éclaire à la perfection.",96),
            new Products(7, "Grande valise","src/assets/images/valise.jpg","Une grande valise.",100),
            new Products(8, "Four micro-ondes","src/assets/images/microonde.jpg","Réchauffe vos plats avec amour et tendresse",63),
            new Products(9, 'Trousse',"src/assets/images/trousse.jpg","Faite main, 100% coton.",18),
            new Products(10, "Samsung S8","src/assets/images/samsung.jpg","Abandonnez enfin votre iPhone pour retrouver un téléphone de qualité",799),
            new Products(11, 'Chaise','src/assets/images/chaise.jpg',"On peut s'assoir dessus, on ne lui en demande pas plus !",32)
        ];

        localStorage.setItem('products', JSON.stringify(products));
    }
}