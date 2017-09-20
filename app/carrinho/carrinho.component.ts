import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

import { Produto } from './../produtos/produto.model';
import { CarrinhoService } from './carrinho.service';

@Component({
    moduleId: module.id,
    selector: 'carrinho',
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
    carrinho: Produto[];
    quantidade: number;
    constructor(
        private carrinhoService: CarrinhoService
    ) { }


    ngOnInit(): void {
        this.carrinhoService.getCarrinho()
            .then((carrinho: Produto[])=>{
                this.carrinho = carrinho
                this.quantidade = carrinho.length;
                console.log(this.quantidade);
            })
            .catch(err => console.log(err));
     }
}