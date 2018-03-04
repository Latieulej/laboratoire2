import { Component } from '@angular/core';
import {AuthenticationService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {Users} from "../models/Users";
import {AuthGuard} from "../auth/auth-guard";
import { Products, Cart } from "../models/Models";
import { ProductsComponent } from "../products/products.component";

@Component({
    selector : 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})


export class HomeComponent {
    public model: Users = {username: '', password: ''};

    constructor(private router: Router, private authenticationService: AuthenticationService, private authGuard: AuthGuard){
        
    }  

    private products: Products[] = JSON.parse(localStorage.getItem('products')) ;

    reroute(newRoute: string) {
        if (newRoute == "home") this.router.navigateByUrl('/', { skipLocationChange: false });
        if (newRoute == "cart") this.router.navigateByUrl('/cart', { skipLocationChange: false });
    }
   
    isNotConnected(){
        return !this.authGuard.isConnected();
    }

    addToCart(produit : Products) {
        // Si cart n'existe pas dans le localStorage on le crée et on ajoute le produit
        // sinon (s'il existe) on vérifie si le produit est déjà dans le panier
        // si oui on modifie la quantité, sinon on l'ajoute avec 1 en quantité

        if (!localStorage.getItem('cart')) {
            let cart : Cart[] = [
                new Cart(produit.id,produit.nom,produit.photo,produit.prix,1)
            ] ;
            localStorage.setItem('cart', JSON.stringify(cart)) ;
            localStorage.setItem('totalCart', JSON.stringify(produit.prix)) ; 
        } else {
            let cart: Cart[] = JSON.parse(localStorage.getItem('cart')); // Récupère les données
            let total: number = JSON.parse(localStorage.getItem('totalCart')); //Récupère le total du panier

            // On vérifie si déjà dans le panier si oui on modifie la quantité et on retourne true
            let exist: boolean = false ;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].pId == produit.id) {
                    cart[i].quantite += 1 ;
                    total += cart[i].prix ; // Ajoute le prix au total
                    exist = true ; 
                } 
            }

            if (!exist) { // Si le produit n'existe pas
                let p: Cart = new Cart(produit.id, produit.nom, produit.photo, produit.prix, 1) ;
                total += p.prix ; // Ajoute le prix au total
                cart.push(p) ; // L'Ajoute au tableau
            }              
            
            localStorage.setItem('cart', JSON.stringify(cart)); // L'ajoute au localStorage
            localStorage.setItem('totalCart', JSON.stringify(total)) ; // Ajout du total au localStorage
        }
    }
}