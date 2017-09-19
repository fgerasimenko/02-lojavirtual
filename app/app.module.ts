import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { AppRoutingModule } from './app-routing.module';
import { CarrinhoModule } from './carrinho/carrinho.module';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ProdutosModule,
        CarrinhoModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}