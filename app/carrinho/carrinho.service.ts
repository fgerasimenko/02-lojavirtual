import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import './../util/rxjs-extensions';

import { Produto } from './../produtos/produto.model';
import { CARRINHO } from './carrinho-mock';

@Injectable()

export class CarrinhoService {
    private apiUrl: string ='app/produto';
    private
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

    deleteCarrinho(produto: Produto): Promise<Produto>
    {
        const url = `${this.apiUrl}/${produto.id}`
        
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => produto as Produto)
            .catch(this.handleError);

    }

    private handleError(err: any): Promise<any>
    {
        console.log('Error:', err);
        return Promise.reject(err.message || err);
    }

    getFrete(cep: string): number
    {
        let retorno: number;
        if(cep)
        {
            retorno = 11.00 
        }else{
            retorno = 0
        }
        return retorno
    }
}