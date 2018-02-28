import { Component } from '@angular/core';
import {Products} from "../../models/Models";

@Component({
    selector : 'app-products-create',
    templateUrl: './products-create.component.html',
    styleUrls: [ './products-create.component.css' ]
})
export class ProductsCreateComponent {
    private products: Products[] = [
        new Products(1,"Ordinateur portable","img1.jpg","Ordinateur de la marque Asus, quasiment neuf, excellent état.",500),
        new Products(2,"Télévision","img2.jpg","Écran plasma acheté en 2003",150)
    ];    

}
/**function addproducts(){
    document.getElementById("products").
}
*/