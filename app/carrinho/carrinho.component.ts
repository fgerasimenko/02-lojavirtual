import { Component, Input, EventEmitter, OnInit, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Produto } from './../produtos/produto.model';
import { CarrinhoService } from './carrinho.service';

@Component({
    moduleId: module.id,
    selector: 'carrinho',
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
    @Input() cep: string ="00000-000";
    carrinho: Produto[];
    frete: number;
    quantidade: number
    constructor(
        private carrinhoService: CarrinhoService
    ) { }


    ngOnInit(): void {
        this.carrinhoService.getCarrinho()
            .then((carrinho: Produto[])=>{
                this.carrinho = carrinho;
                this.quantidade = carrinho.length;
            })
            .catch(err => console.log(err));
        
     }

     onCalcular(data: string)
     {
        this.cep = data
        this.frete = this.carrinhoService.getFrete(data);
     }

    onDelete(produto: Produto): void
    {
        this.carrinhoService
            .deleteCarrinho(produto)
            .then(()=> 
                this.carrinho = this.carrinho.filter((p: Produto) => p.id != produto.id));
    }

}