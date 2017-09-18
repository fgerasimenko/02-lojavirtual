import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosListaComponent } from './produtos-lista.component';

@NgModule({
    declarations: [ProdutosListaComponent],
    imports: [ CommonModule ],
    exports: [ProdutosListaComponent],
    providers: [],
})
export class ProdutosModule {}