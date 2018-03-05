import { Component } from '@angular/core';
import {Products} from "../../models/Models";
import { ProductsComponent } from "../products.component";
@Component({
    selector : 'app-products',
    templateUrl: './products-create.component.html',
    styleUrls: [ './products-create.component.css' ]
})
export class ProductsCreateComponent {
       
    public products: Products[] = JSON.parse(localStorage.getItem('products'));

getForm(products:Products){
    console.log(products.id);

}

   // Permet de stocker les produits dans le localStorage afin d'y accéder partout sur le site
 
    addToProduct(cproduit: Products) {
        
        let products: Products[] = [
            //new Products(cproduit.id, cproduit.nom, cproduit.photo, cproduit.prix, 1)
        ];
      
    //products.push(products)
     // L'Ajoute au tableau
    localStorage.setItem('products', JSON.stringify(product));
        
    } }    