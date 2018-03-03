import { Component } from '@angular/core';
import { Products } from "../../models/Models";
import {ActivatedRoute} from "@angular/router";
import { Cart } from "../../models/Cart" ;

@Component({
    selector : 'app-products',
    templateUrl: './products-desc.component.html',
    styleUrls: [ './products-desc.component.css' ]
})
export class ProductsDetailsComponent {
    private model: Products;

    private products: Products[] = JSON.parse(localStorage.getItem('products'));

    constructor(private route: ActivatedRoute){
        let myId="";
        this.route.params.subscribe(params => {
           myId = params["id"];
        });
        switch (myId){
            case "1":
                this.model = this.products[0];
                break;
            case "2":
                this.model = this.products[1];
                break;
            case "3":
                this.model = this.products[2];
                break;
        }
    }

    addToCart(produit: Products) {
        // Si cart n'existe pas dans le localStorage on le crée et on ajoute le produit
        // sinon (s'il existe) on vérifie si le produit est déjà dans le panier
        // si oui on modifie la quantité, sinon on l'ajoute avec 1 en quantité

        if (!localStorage.getItem('cart')) {
            let cart: Cart[] = [
                new Cart(produit.id, produit.nom, produit.photo, produit.prix, 1)
            ];
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            let cart: Cart[] = JSON.parse(localStorage.getItem('cart')); // Récupère les données

            // On vérifie si déjà dans le panier si oui on modifie la quantité et on retourne true
            let exist: boolean = false;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].pId == produit.id) {
                    cart[i].quantite += 1;
                    exist = true;
                }
            }

            if (!exist) { // Si le produit n'existe pas
                let p: Cart = new Cart(produit.id, produit.nom, produit.photo, produit.prix, 1);
                cart.push(p); // L'Ajoute au tableau
            }

            localStorage.setItem('cart', JSON.stringify(cart)); // L'ajoute au localStorage
        }
    }
}