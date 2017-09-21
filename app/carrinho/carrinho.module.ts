import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarrinhoComponent } from './carrinho.component';
import { CarrinhoService } from './carrinho.service';

import { CarrinhoRoutingModule } from './carrinho-routing.module';

import { ProdutosModule } from './../produtos/produtos.module';

@NgModule({
    declarations: [CarrinhoComponent],
    imports: [ 
        ProdutosModule,
        CarrinhoRoutingModule,
        CommonModule,
        FormsModule 
    ],
    exports: [CarrinhoComponent],
    providers: [
        CarrinhoService
    ],
})
export class CarrinhoModule {}