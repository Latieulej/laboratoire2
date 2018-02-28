import { Component } from '@angular/core';
import { Cart } from "../models/Cart";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {
    private products: Cart[] = [
        new Cart('Ordinateur portable','',500,2) 
    ];

    addToCart() {
        console.log("Bonjour") ;
    }
}