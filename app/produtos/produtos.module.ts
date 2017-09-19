import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosListaComponent } from './produtos-lista.component';
import { ProdutoDetalheComponent } from './produto-detalhe.component';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
    declarations: [
                    ProdutosListaComponent,
                    ProdutoDetalheComponent
    ],
    imports: [ 
        CommonModule 
    ],
    exports: [
        ProdutosListaComponent,
        ProdutoDetalheComponent,
        ProdutoRoutingModule
    ],
    providers: [],
})
export class ProdutosModule {}