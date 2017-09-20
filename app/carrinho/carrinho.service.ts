import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Produto } from './../produtos/produto.model';
import { CARRINHO } from './carrinho-mock';

@Injectable()

export class CarrinhoService {
    private apiUrl: string ='carrinho';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    constructor(
        private http: Http
    ){}

    getCarrinho(): Promise<Produto[]>{
        return Promise.resolve(CARRINHO)
    }

    createCarrinho(produto: Produto): void
    {
        CARRINHO.push(produto);
    }

    getQuantidade(): number
    {
        return CARRINHO.length;
    }
    private handleError(err: any): Promise<any>
    {
        console.log('Error:', err);
        return Promise.reject(err.message || err);
    }
}