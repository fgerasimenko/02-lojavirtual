import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoComponent } from './carrinho.component';

@NgModule({
    declarations: [CarrinhoComponent],
    imports: [ CommonModule ],
    exports: [CarrinhoComponent],
    providers: [],
})
export class CarrinhoModule {}