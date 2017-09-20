import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ProdutosModule } from './produtos/produtos.module';
import { AppRoutingModule } from './app-routing.module';

import { CarrinhoService } from './carrinho/carrinho.service';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        ProdutosModule,
        CarrinhoModule
    ],
    declarations: [
        AppComponent

    ],
    bootstrap: [
        AppComponent
    ],
    providers:[
        CarrinhoService
    ]
})
export class AppModule {

}