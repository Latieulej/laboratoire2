import { Component } from '@angular/core';
import { Products } from "../models/Models";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    private products: Products[] = JSON.parse(localStorage.getItem('products'));
}