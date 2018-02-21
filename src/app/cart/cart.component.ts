import { Component } from '@angular/core';
import { Cart } from "../models/Cart";

@Component({
    selector: 'app-products',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {
    private products: Cart[] = [
        
    ];
}