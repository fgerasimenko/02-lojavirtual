import { Component, OnInit } from '@angular/core';

import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';

import { CarrinhoService } from './../carrinho/carrinho.service'


@Component({
    moduleId: module.id,
    selector: 'produtos-lista',
    templateUrl: './produtos-lista.component.html',
    styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

    produtos: Produto[];
    produto: Produto;
    private isNew = true;
    
    constructor(
        private produtoService: ProdutoService,
        private carrinhoService: CarrinhoService
    ) { }

    ngOnInit(): void {
        this.produtoService.getProdutos()
            .then((produtos: Produto[]) => {
                this.produtos = produtos;
            })
            .catch(err => console.log(err));
     }

     onAdd(produto: Produto,qtd: number): void{
        //this.carrinhoService.addOrUpdate(id);
        let promise = this.carrinhoService.findProduto(produto.id).then(car => car.id === produto.id)
                        
                        

        if(promise)
        {
            //this.carrinhoService.create(produto,qtd);
            console.log(promise)
        }else{
            //this.carrinhoService.update(produto, qtd);
            console.log('nlog');
        }

        
        //let prod = this.carrinhoService.create(produto,qtd);     
     }
}