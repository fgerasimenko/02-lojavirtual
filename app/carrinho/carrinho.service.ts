import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import './../util/rxjs-extensions';


import { ProdutoCarrinho } from './produtoCarrinho.model';
import { CARRINHO } from './carrinho-mock';

@Injectable()

export class CarrinhoService {
    private apiUrl: string ='app/carrinho';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    constructor(
        private http: Http
    ){}

    getCarrinho(): Promise<ProdutoCarrinho[]>{

        return this.http.get(this.apiUrl)
        .toPromise()
        .then(response => response.json().data as ProdutoCarrinho[])
        .catch(this.handleError);
        
    }

    create(produto: ProdutoCarrinho,qtd: number): Promise<ProdutoCarrinho>
    {
        return this.http
        .post(this.apiUrl, JSON.stringify(produto), {headers: this.headers})
        .toPromise()
        .then((response: Response) => response.json().data as ProdutoCarrinho)
        .catch(this.handleError);
        
    }

    update(produto: ProdutoCarrinho, qtd: number): Promise<ProdutoCarrinho>
    {
        const url = `${this.apiUrl}/${produto.id}`

        // Pegar o produto no carrinho
        let p = this.http.get(url)
        .toPromise()
        .then(response => response.json().data as ProdutoCarrinho)

        console.log(produto+' '+qtd)

        //Atualizar
         // app/carrinho/:id
        return this.http
            .put(url, JSON.stringify(produto), {headers: this.headers})
            .toPromise()
            .then(() => produto as ProdutoCarrinho)
            .catch(this.handleError);

    }

    findProduto(id: number): Promise<ProdutoCarrinho>
    {

        return this.http.get(this.apiUrl)
        .toPromise()
        .then(resp => resp.json().data as ProdutoCarrinho)
    }

    deleteCarrinho(produto: ProdutoCarrinho): Promise<ProdutoCarrinho>
    {
        const url = `${this.apiUrl}/${produto.id}`
        
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => produto as ProdutoCarrinho)
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