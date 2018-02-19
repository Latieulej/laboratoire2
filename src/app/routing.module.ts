import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from "./products/products.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "./auth/auth-guard";

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '/notfound' }
];


export const routing = RouterModule.forRoot(routes,{
    enableTracing: true
});