"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("./../util/rxjs-extensions");
let CarrinhoService = class CarrinhoService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'app/carrinho';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    getCarrinho() {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    create(produto, qtd) {
        return this.http
            .post(this.apiUrl, JSON.stringify(produto), { headers: this.headers })
            .toPromise()
            .then((response) => response.json().data)
            .catch(this.handleError);
    }
    update(produto, qtd) {
        const url = `${this.apiUrl}/${produto.id}`;
        // Pegar o produto no carrinho
        let p = this.http.get(url)
            .toPromise()
            .then(response => response.json().data);
        console.log(produto + ' ' + qtd);
        //Atualizar
        // app/carrinho/:id
        return this.http
            .put(url, JSON.stringify(produto), { headers: this.headers })
            .toPromise()
            .then(() => produto)
            .catch(this.handleError);
    }
    findProduto(id) {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(resp => resp.json().data);
    }
    deleteCarrinho(produto) {
        const url = `${this.apiUrl}/${produto.id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => produto)
            .catch(this.handleError);
    }
    handleError(err) {
        console.log('Error:', err);
        return Promise.reject(err.message || err);
    }
    getFrete(cep) {
        let retorno;
        if (cep) {
            retorno = 11.00;
        }
        else {
            retorno = 0;
        }
        return retorno;
    }
};
CarrinhoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CarrinhoService);
exports.CarrinhoService = CarrinhoService;
//# sourceMappingURL=carrinho.service.js.map