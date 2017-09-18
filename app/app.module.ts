import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
    imports: [
        BrowserModule,
        ProdutosModule
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