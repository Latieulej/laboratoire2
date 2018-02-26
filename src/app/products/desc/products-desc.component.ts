import { Component } from '@angular/core';
import { Products } from "../../models/Models";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector : 'app-products',
    templateUrl: './products-desc.component.html',
    styleUrls: [ './products-desc.component.css' ]
})
export class ProductsDetailsComponent {
    private model: Products;

 /*   private products: products[] = [
        new Products("Bricot","Judas"),
        new Products("Nanas","Judas"),
        new Products("Piteau","Chat")
    ];

    constructor(private route: ActivatedRoute){
        let myId="";
        this.route.params.subscribe(params => {
           myId = params["id"];
        });
        switch (myId){
            case "1":
                this.model = this.Products[0];
                break;
            case "2":
                this.model = this.Products[1];
                break;
            case "3":
                this.model = this.Products[2];
                break;
        }
    }
    */
}