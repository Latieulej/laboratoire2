import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NgModule} from "@angular/core";
import {AuthGuard} from "./auth/auth-guard";
import { CartComponent } from './cart/cart.component';
import {ProductsRoutingModule} from "./products/products.routing.module";

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [
        ProductsRoutingModule,
        RouterModule.forRoot(routes,{
        enableTracing: true
    })],
    exports: [RouterModule],
    providers: []
})

/*export const routing = RouterModule.forRoot(routes,{
    enableTracing: true
});*/
export class AppRoutingModule {
}