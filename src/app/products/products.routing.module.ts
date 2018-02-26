import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ProductsCreateComponent} from "./create/products-create.component";
import {ProductsDetailsComponent} from "./desc/products-desc.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'create',
        component: ProductsCreateComponent
    },
    {
        path: ':id',
        component: ProductsDetailsComponent
    }

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes,{
            enableTracing: true
        })],
    exports: [RouterModule],
    providers: []
})
export class ProductsRoutingModule {
}