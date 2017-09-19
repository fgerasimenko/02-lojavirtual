import { Component, OnInit } from '@angular/core';

import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';


@Component({
    moduleId: module.id,
    selector: 'produtos-lista',
    templateUrl: './produtos-lista.component.html',
    styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

    produtos: Produto[];    
    constructor(
        private produtoService: ProdutoService
    ) { }

    ngOnInit(): void {
        this.produtoService.getProdutos()
            .then((produtos: Produto[]) => {
                this.produtos = produtos;
            })
            .catch(err => console.log(err));
     }
}