import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
        CarrinhoModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
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