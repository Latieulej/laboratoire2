import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./routing.module";
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProductsRoutingModule} from "./products/products.routing.module";
import {ProductsModule} from "./products/products.module";
import {AuthenticationService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ProductsModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
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
