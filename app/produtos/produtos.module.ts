import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosListaComponent } from './produtos-lista.component';
import { ProdutoDetalheComponent } from './produto-detalhe.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoService } from './produto.service';

@NgModule({
    declarations: [
                    ProdutosListaComponent,
                    ProdutoDetalheComponent
    ],
    imports: [ 
        CommonModule,
        ProdutoRoutingModule 
    ],
    exports: [
        ProdutosListaComponent,
        ProdutoDetalheComponent,
    ],
    providers: [
        ProdutoService
    ]
})
export class ProdutosModule {}