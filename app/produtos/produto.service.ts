import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Produto } from './produto.model';
import { PRODUTOS } from './produtos-mock';

@Injectable()
export class ProdutoService {

    getProdutos(): Promise<Produto[]>{
        return Promise.resolve(PRODUTOS);
    }

    getProduto(id: number): Promise<Produto>{
        return this.getProdutos()
            .then((produtos: Produto[]) => produtos.find(produto => produto.id == id));
    }
}