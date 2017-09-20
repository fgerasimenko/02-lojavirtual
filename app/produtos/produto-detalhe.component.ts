import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Location } from '@angular/common';

import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';

@Component({
    moduleId: module.id,
    selector: 'produto-detalhe',
    templateUrl: './produto-detalhe.component.html',
    styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {
    produto: Produto = new Produto(0,'','','','',0,0,'');
    

    constructor(
        private produtoService: ProdutoService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) =>{
            let id: number  = +params['id'];

            this.produtoService.getProduto(id)
                .then((produto: Produto) => this.produto = produto);
            console.log(this.produto);
        })
    }
}