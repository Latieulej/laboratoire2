import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {routing} from "./routing.module";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {CartComponent} from "./cart/cart.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthenticationService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProductsComponent,
        CartComponent
    ],
    providers: [
      AuthenticationService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}