import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {ProductsDetailsComponent} from "./desc/products-desc.component";
import {ProductsCreateComponent} from "./create/products-create.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        ProductsComponent,
        ProductsCreateComponent,
        ProductsDetailsComponent
    ],
    exports: [
        ProductsComponent,
        ProductsCreateComponent,
        ProductsDetailsComponent
    ]
})
export class ProductsModule {
}