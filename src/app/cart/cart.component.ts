import { Component } from '@angular/core';
import { Cart } from "../models/Cart";
import { Products} from "../models/Products" ;

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {
    
    private cart: Cart[] = JSON.parse(localStorage.getItem('cart')); 
  
    getTotal() {
        return JSON.parse(localStorage.getItem('totalCart')) ;
    }
}
